//importar modulo de mongo mongoose
const mongoose = require("mongoose");

//conexion con la db
const url =
  "mongodb+srv://danielpostigo96:sMOle2wBUACOAC32@cluster0.iokiqro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const conectDB = async () => {
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log("database conection error", error);
    process.exit(1);
  }
};
//Maneja la conexion comn la base de datos
//Configura las opciones basicas de Mongoose
module.exports = { conectDB };
