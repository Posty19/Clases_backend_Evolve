const mongoose = require("mongoose");

//definir el esquema de producto
const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required:true,
  },
  descripcion: {
    type: String,
    required:true,
  },
  precio: {
    type: Number,
    required:true,
    min: [0,'precio minimo de 0']
  },
  stock: {
    type: Number,
    required:true,
    min: [0,'stock minimo de 0']
  },
  categoria: {
    type: String,
    required:true,
  },
  marca: {
    type: String,
    required:true,
  },
  codigoProducto: {
    type: String,
    required:true,
    unique:true,
  },
  fechaFabricacion: {
    type: Date,
    required:true,
  },
  garantiaMeses: {
    type: Number,
    required:true,
    min: 0,
  },
  peso: {
    type: Number,
    required:true,
    min: 0,
  },
  dimensiones: {
    type: {
      alto: {
        type: Number,
        required:true,
        min:[0,'alto minimo de 0']
      },
      ancho: {
        type: Number,
        required:true,
        min:[0,'ancho miinimo de 0']
      },
      profundidad: {
        type: Number,
        required:true,
        min:[0,'Profundidad miinimo de 0']
      },
    },
    required:true,
  },
  colores: [String],
  etiquetas: [String],
  imagenes: [String],
  esActivo: {
    type: Boolean,
    required:true,
    default:true,
  },
  fechaCreacion: {
    type: Date,
    required:true,
    default: Date.now,
  },
  ultimaActualizacion: {
    type: Date,
    required:true,
    default: Date.now,
  },
});

const Producto = mongoose.model('Producto',productSchema);

module.exports = Producto;

/**
 {
  "nombre":"producto 1",
  "descripcion":"producto 1 descripcion",
  "precio":10,
  "stock":2,
  "categoria":"categoria 1",
  "marca":"marca 1",
  "codigoProducto":"codigo de producto 1",
  "fechaFabricacion":"2025-04-03T15:23:27Z",
  "garantiaMeses": 18,
  "peso":5,
  "dimensiones":{
    "alto":1,
    "ancho":1,
    "profundidad":1
  }
}
 */