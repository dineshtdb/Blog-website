const mongoose =require('mongoose');
const {Schema,model} =mongoose;

const userschema=new Schema({
    username:{type:String,require:true,min:4,unique:true},
    password:{type:String,require:true},
})
const usermodel=model('User',userschema);
module.exports=usermodel;