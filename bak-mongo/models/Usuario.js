const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    nacionalidad: {
        type: String,
        enum: ['MX', 'USA', 'BR']
    },
    sexo: {
        type: String,
        enum: ['F', 'M', 'SN']
    }
});

const Usuario = mongoose.model('usuario', usuarioSchema);

module.exports = Usuario;
