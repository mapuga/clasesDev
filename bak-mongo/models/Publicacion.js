const mongoose = require('mongoose');

const publicacionSchema = new mongoose.Schema({
    titulo: String,
    comentario: {
        type: String
    }
});

const Publicacion = mongoose.model('publicacion', publicacionSchema);

module.exports = Publicacion;
