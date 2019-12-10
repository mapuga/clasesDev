const mongoose = require('mongoose');
const Director = require('./Director');
const Usuario = require('./Usuario');
const Publicacion = require('./Publicacion');

const URL = 'mongodb+srv://admin:123123AB@cluster0-7iyok.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URL, (err) => {
    if(!err) console.log('Conexión Exitosa')
    else console.log(err);
});

module.exports = {
    Director,
    Usuario,
    Publicacion
}