//importar modulo de mongo mongoose
const mongoose = require('mongoose');

//conexion con la db
const url = 'mongodb+srv://danielpostigo96:<db_password>@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect('mongodb+srv://danielpostigo96:sMOle2wBUACOAC32@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('conexion realizada con exito'))
.catch(error=>console.log('error',error));

//creacion de esquema de isuario
const userSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
})

//creacion de modelo de usuario
const Usuario = mongoose.model('Usuario',userSchema);

async function inserUser(nombre,email){
    try {
        const usuario = new Usuario({nombre,email});
        const response = await usuario.save();
        console.log('usuario insertado: ',response);
    } catch (error) {
        console.log('fallo al crear el usuario: ',error);
    }
}

async function getUsers(){
    try {
        const usuarios = Usuario.find();
        console.log('Usuarios', usuarios);
    } catch (error) {
        console.log('fallo al obtener usuarios: ',error);
    }
}

async function updateUser(id,nombre,email){
    try {
        const response = Usuario.findByIdAndUpdate(id,{nombre,email},{new:true});
        console.log('Usuario actualizado', response);
    } catch (error) {
        console.log('fallo al actualizar usuario: ',error);
    }
}

async function delleteUser(id){
    try {
        const response = Usuario.findByIdAndDelete(id);
        console.log('Usuario eliminado', response);
    } catch (error) {
        console.log('fallo al eliminar usuario: ',error);
    }
}