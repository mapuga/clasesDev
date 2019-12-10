const request = require("request");
const URI = "https://pokeapi.co/api/v2/pokemon/";

request.get("https://pokeapi.co/api/v2/pokemon/pikachu/", (error, response, body)=>{
    // console.log(response.statusCode);
    // console.log(body);
    // console.log("Mi pokemon " + JSON.parse(body).name);
    // console.log(JSON.parse(body).moves);
    
    // JSON.parse(body).moves.forEach(movimiento => {
    //     console.log(movimiento.move.name);
    // });

    // const misMovimientos = JSON.parse(body).moves;
    // misMovimientos.reduce(function(valorAnterior, valorActual, indice){
    //     console.log(indice + ' ' + valorActual.move.name);
    //   });
});

// const URI_SW = "https://swapi.co/api/people/";

// const getStarWar = (id) => {
//     request(URI_SW + id, (error, response, body) => {
//         let planeta = '';
//         if(response.statusCode === 200){
//             const personaje = JSON.parse(body).name;
//             const URI_PLANETA = JSON.parse(body).homeworld;
//             request(URI_PLANETA, (error, response, body) => {
//                 console.log(personaje + ' nacio en el planeta ' + JSON.parse(body).name);
//             })
//         }
//     });
// }

// getStarWar(2);

const URI_NASA = "https://api.nasa.gov/neo/rest/v1/feed";
const getAsteroids = (finicio, ffin) => {
    let params = { start_date: finicio, end_date: ffin, api_key: 'DEMO_KEY' };

    request({url:URI_NASA, qs:params}, function(err, response, body) {
      if(err) { console.log(err); return; }
      const arrAsteroides = JSON.parse(body);
      console.log(arrAsteroides);
    });
}

getAsteroids('2019-11-25', '2019-11-30');