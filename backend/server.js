const express = require('express');
const app = express();
// Configuracion para aceptar el body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (request, response) => {
    response.send({ mensaje: 'Mi primera respuesta desde el backend'})
});

app.get('/saludo', (req, res) => {
    res.send({ mensaje: 'Hola como estas '});
})

app.get('/users/:uid', (req, res) => {
    res.send({ mensaje: `Usuario a buscar ${req.params.uid}`})
})

app.get('/search', (req, res) => {
    console.log(req.query.q)
    res.send({ message: 'Busqueda'})
})

app.post('/users', (req, res) => {
    console.log(req.body)
    res.status(201).send({ ...req.body, id: 1})
})

app.listen(3000, () => {
    console.log('Server on port 3000')
});
