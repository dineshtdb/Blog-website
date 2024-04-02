const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User=require('./models/User');
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://dineshutd:Dinesh29062004@cluster0.ja5gmbm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


app.post('/register', async(req, res) => {
    const { username, password } = req.body;
   const user= await User.create({username , password});
    res.json(user);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

