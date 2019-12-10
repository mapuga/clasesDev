const express = require('express');
const { Publicacion } = require('./models/index');
const { Usuario } = require('./models/index');

const app = express();

// Configuracion para aceptar el body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Endpoints de Publicaciones
app.post('/post', (req, res) => {
    const newPost = Publicacion(req.body);
    newPost.save( (err, post)=> {
        err 
            ? res.status(400).send(err)
            : res.status(201).send(post)
    });
})

app.get('/allPosts', (req, res) => {
    Publicacion.find().exec()
        .then( (result) => {
            res.send(result)
        })
        .catch( (err) => {
            res.status(404).send(err)
        })
})

app.get('/post/:id', (req, res) => {
    const id = req.params.id
    Publicacion.findById(id).exec()
        .then( (result) => {
            result
                ? res.status(200).send(result)
                : res.status(404).send('No existe post')
        })
        .catch( (err) => {
            res.status(500).send(err)
        })
})

app.patch('/post/:id', (req, res) => {
    const id = req.params.id
    Publicacion.findByIdAndUpdate(
        id,
        {$set: req.body},
        {new: true}
    ).exec()
    .then( (result) => {
        res.status(200).send(result)
    })
    .catch( (err) => {
        res.status(500).send(err)
    })
})


// Endpoints de Usuarios
// 5de71ee461751b5878af2a76
app.post('/user', (req, res) => {
    const newUser = Usuario(req.body);
    newUser.save( (err, user)=> {
        err 
            ? res.status(400).send(err)
            : res.status(201).send(user)
    });
})

app.get('/allUsers', (req, res) => {
    Usuario.find().exec()
        .then( (result) => {
            res.send(result)
        })
        .catch( (err) => {
            res.status(404).send(err)
        })
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id
    Usuario.findById(id).exec()
        .then( (result) => {
            result
                ? res.status(200).send(result)
                : res.status(404).send('No existe usuario')
        })
        .catch( (err) => {
            res.status(500).send(err)
        })
})

app.patch('/user/:id', (req, res) => {
    const id = req.params.id
    Usuario.findByIdAndUpdate(
        id,
        {$set: req.body},
        {new: true}
    ).exec()
    .then( (result) => {
        res.status(200).send(result)
    })
    .catch( (err) => {
        res.status(500).send(err)
    })
})


app.listen(3000, () => {
    console.log('Server Users and Posts on port 3000')
});
