const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User=require('./models/User');
const Post=require('./models/Post');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const cookieparser =require('cookie-parser');
const multer = require('multer');
const fs=require('fs');

const app = express();
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());
const salt=bcrypt.genSaltSync(10);
const secret='hvhscvvsacvvsa';
app.use(cookieparser());
app.use('/uploads',express.static(__dirname+'/uploads'));

const uploadMiddleware = multer({ dest: 'uploads/' });


mongoose.connect('mongodb+srv://dineshutd:Dinesh29062004@cluster0.ja5gmbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.post('/register', async(req, res) => {
    const { username, password } = req.body;
    try{
   const user= await User.create({username , 
    password:bcrypt.hashSync(password,salt),
});
    res.json(user);
    }catch(e){
        res.status(400).json(e);
    }
});
app.post('/login', async (req,res) => {
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });
  app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info) => {
      if (err) throw err;
      res.json(info);
    });
  });
  
  
  app.post('/logout', (req,res) => {
    res.cookie('token', '').json('ok');
  });
  app.post('/post', uploadMiddleware.single('file'),async (req,res) => {
    const {originalname,path}=req.file;
    const parts=originalname.split('.');
    const ext=parts[parts.length-1];
    const newpath=path+'.'+ext;
    fs.renameSync(path,newpath);
    const {title,summary,content}=req.body;

    const {token} = req.cookies;
    jwt.verify(token, secret, {}, async (err,info) => {
      if (err) throw err;
      const postDoc= await Post.create({
        title,
        summary,
        content,
        cover:newpath,
        author:info.id,
     });
      res.json(postDoc);
    });

    
  });
  app.get('/post', async (req,res) => {
    res.json(
      await Post.find()
      .populate('author',['username'])
      .sort({createdAt:-1})
      .limit(20)
       
    );
  });

  app.get('/post/:id',async(req,res)=>{
    const {id}=req.params;
    const postDec=await Post.findById(id).populate('author',['username']);
    res.json(postDec)
  })
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

