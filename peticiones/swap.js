//Devolver la primera pelicula en la 
// que aparece el personaje numero 20 --> X

const request = require('request');

function getPeliculaById(idPersonaje){
    //Consum endpoint /people
    // Consumir endpoint de peliculas

    request.get(`https://swapi.co/api/people/${idPersonaje}`, (err, response, body) => {
        if(err) return console.log('Error');
        if(response.statusCode === 200){
            const people = JSON.parse(body);
            console.log(people.name);
            request.get(people.films[0], (err, response, body) => {
                if(err) return console.log('Error');
                if(response === 200){
                    console.log(JSON.parse(body));
                } else {
                    console.log(JSON.parse(body));
                }
            });
        }
    });
}

getPeliculaById(20);