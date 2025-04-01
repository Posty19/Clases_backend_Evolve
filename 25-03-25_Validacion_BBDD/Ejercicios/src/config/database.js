const mongoose = require('mongoose');

const url =
  "mongodb+srv://danielpostigo96:sMOle2wBUACOAC32@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Conexión a la base de datos establecida correctamente');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
};

module.exports = connectDB; 