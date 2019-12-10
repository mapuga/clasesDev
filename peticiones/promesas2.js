const request = require('request');

function getPeliculaById(idPersonaje){
    return new Promise( (resolve, reject) => {
        request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
            response.statusCode === 200
                ? resolve(JSON.parse(body))
                : reject('Error buscando al personaje')
        });
    });
}

function getMovieByUrl(url){
    return new Promise( (resolve, reject) => {
        request.get(url, (err, response, body) => {
            response.statusCode === 200
                ? resolve(JSON.parse(body))
                : reject('Error en la busqueda de peliculas')
        });
    });
}

getPeliculaById(29)
    .then( (personaje) => {
        console.log(personaje.name)
        return getMovieByUrl(personaje.films[0])
    })
    .then( (movies) => console.log(movies.title))
    .catch( (err) => console.log(err))