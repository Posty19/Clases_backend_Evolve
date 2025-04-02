const mongoose = require("mongoose");

//definir el esquema de producto
const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: [0,'precio minimo de 0']
  },
  stock: {
    type: Number,
    required: true,
    min: [0,'stock minimo de 0']
  },
  categoria: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  categoria: {
    type: String,
    required: true,
    unique: true,
  },
  fechaFabricacion: {
    tipe: Date,
    required: true,
  },
  garantiaMeses: {
    type: Number,
    required: true,
    min: 0,
  },
  peso: {
    type: Number,
    min: 0,
  },
  dimensiones: {
    type: {
      alto: {
        type: Number,
        required: true,
        min:[0,'alto miinimo de 0']
      },
      ancho: {
        type: Number,
        required: true,
        min:[0,'ancho miinimo de 0']
      },
      profundidad: {
        type: Number,
        required: true,
        min:[0,'Profundidad miinimo de 0']
      },
    },
    required: true,
  },
  colores: {
    type: [String],
  },
  etiquetas: {
    type: [String],
  },
  imagenes: {
    type: [String],
  },
  esActivo: {
    type: Date,
    default: true,
  },
  esActivo: {
    type: Date,
    required: true,
    default: true,
  },
  fechaCreacion: {
    type: Date,
    required: true,
    default: Date.now,
  },
  ultimaActualizacion: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Producto = mongoose.model('Producto',productSchema);

module.exports = Producto;