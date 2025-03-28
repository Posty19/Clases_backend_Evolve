const mongoose = require('mongoose');
//definir el esquema de home

const userSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        typr:String,
        required:true,
        unique:true
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;