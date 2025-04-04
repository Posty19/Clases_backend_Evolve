const mongoose = require('mongoose');
const bcrypt = require("bcrypt");

// Definir el esquema de usuario
const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false,
      },
    saldoEuros: {
        type: Number,
        required: true,
        default: 0,
        min: [0, 'El saldo no puede ser negativo']
    },
    cuentaBancaria: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    },
    fechaAlta: {
        type: Date,
        required: true,
        default: Date.now
    },
    codigoDepartamento: {
        type: String,
        required: true,
        minlength: [3, 'El código de departamento debe tener al menos 3 caracteres'],
        maxlength: [10, 'El código de departamento no puede tener más de 10 caracteres']
    },
    codigoPostal: {
        type: String,
        required: true
    }
});

//middleware para comparar contraseñas
usuarioSchema.method.comparePassword = async function(candidatePassword){
    return bcrypt.compare(candidatePassword,this.password);
}
//middleware para hashear contraseñas antes de guardar
usuarioSchema.pre('save', async function(next) {
    try {
        this.password=await bcrypt.hash(this.password,10);
        next();
    } catch (e) {
        next(e)
    }
})

// Crear el modelo de usuario
const Usuario = mongoose.model('Usuario', usuarioSchema); // Colección: usuarios

module.exports = Usuario; 