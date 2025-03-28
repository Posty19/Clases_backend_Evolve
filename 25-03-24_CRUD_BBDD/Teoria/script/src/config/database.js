//importar modulo de mongo mongoose
const mongoose = require('mongoose');

//conexion con la db
const url = 'mongodb+srv://danielpostigo96:sMOle2wBUACOAC32@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const conectBD = async ()=>{
    try {
        await mongoose.connect(url);
    } catch (error) {
        console.log('database conection error', error);
        process.exit(1);
    }
}

module.exports = conectBD;
