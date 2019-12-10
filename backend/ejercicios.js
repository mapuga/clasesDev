const express = require('express');
const app = express();
// Configuracion para aceptar el body
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
/*
----------------------------------------------------------------
    1.- Agrega un endpoint '/api/' que responda a 
        una petición de tipo GET con un código de estado 200 
        y el siguiente json: 
                    {'mensaje':'hola mundo'}
----------------------------------------------------------------
*/

app.get('/api/', (request, response) => {
    response.status(200).send({ mensaje: 'Hola Mundo!!'})
});

/*
----------------------------------------------------------------
    2.- Agrega un endpoint '/api/suma' que responda a una 
        petición de tipo GET con la suma de dos números que 
        reciba mediante las querys num1 y num2. El servidor
        debe responder con un código de estado 200 y un json 
        como el siguiente:
                        {'resultado': 7}
----------------------------------------------------------------
*/

app.get('/api/suma/', (request, response) => {
    let suma = parseInt(request.query.num1) + parseInt(request.query.num2);
    response.status(200).send({ mensaje: `La suma es ${suma}`})
});

/*
----------------------------------------------------------------
    3.- Agrega un endpoint '/api/usuario/' que responda a
        una petición de tipo GET con el nombre que sea 
        recibido a través de params. El servidor debe responder
        con un código de estado 200 y un json como este:
                      {'usuario': 'Edwin'}
----------------------------------------------------------------
*/

app.get('/api/usuario/:nombre', (req, res) => {
    res.status(200).send({ usuario: req.params.nombre})
})

/*
----------------------------------------------------------------
    4.- Agrega un endpoint '/api/swapi' que responda a una
        petición de tipo GET con el personaje solicitado de 
                        https://swapi.co/
        El cliente debe mandar el número de personaje mediante
        params. La respuesta del servidor debe lucir algo así
                    {'personaje': {
                        'name': 'Luke Skywalker',
                        ...,
                    }}
----------------------------------------------------------------
*/

app.listen(3000, () => {
    console.log('Server on port 3000')
});