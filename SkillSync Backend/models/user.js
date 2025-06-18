const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    employeeId:{type:String,required:true},
    role:{type:String},
    picture:{type: String},
    resume:{type:String},
    bio:{type:String},
} , { timestamps:true } )

module.exports = mongoose.model('User',UserSchema);