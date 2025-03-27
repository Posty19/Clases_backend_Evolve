//importar modulo de mongo mongoose
const mongoose = require('mongoose');

//conexion con la db
const url = 'mongodb+srv://danielpostigo96:<db_password>@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect('mongodb+srv://danielpostigo96:sMOle2wBUACOAC32@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=> console.log('conexion realizada con exito'))
.catch(error=>console.log('error',error));
