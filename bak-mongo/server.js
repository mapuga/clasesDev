const express = require('express');
const { Director } = require('./models/index');

const app = express();

// Configuracion para aceptar el body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.post('/director', (req, res) => {
    const newDirector = Director(req.body);
    newDirector.save( (err, director)=> {
        err 
            ? res.status(400).send(err)
            : res.status(201).send(director)
    });
})

app.get('/allDirectors', (req, res) => {
    Director.find().exec()
        .then( (result) => {
            res.send(result)
        })
        .catch( (err) => {
            res.status(404).send(err)
        })
})

app.get('/directors/:id', (req, res) => {
    const id = req.params.id
    Director.findById(id).exec()
        .then( (result) => {
            result
                ? res.status(200).send(result)
                : res.status(404).send('No existe director')
        })
        .catch( (err) => {
            res.status(500).send(err)
        })
})

app.patch('/director/:id', (req, res) => {
    const id = req.params.id
    Director.findByIdAndUpdate(
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
    console.log('Server on port 3000')
});
