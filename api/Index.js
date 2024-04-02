const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User=require('./models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const app = express();
app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());
const salt=bcrypt.genSaltSync(10);
const secret='hvhscvvsacvvsa';


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
app.post('/login', async(req, res) => {
    const { username, password } = req.body;
    
        const user = await User.findOne({ username });
        if (!user) {
            // User not found with the provided username
            return res.status(404).json({ message: 'User not found' });
        }
        const passok = bcrypt.compareSync(password, user.password);
        if(passok){
            jwt.sign({username,id:user.id},secret,{},(err,token)=>{
                    if(err) throw err;
                    res.cookie('token',token).json('ok');
            })
        }else{
           res.status(400).json("Wrong");
        }
    
});



app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

