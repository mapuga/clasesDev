// const listaObj = [
//     {nombre: "lola", age: 20},
//     {nombre: "lola2", age: 20},
//     {nombre: "lola3", age: 23},
//     {nombre: "lola4", age: 24},
//     {nombre: "lola6", age: 26}
// ];

// const filtro = listaObj.filter( (elemento, index, lista) => {
//     return elemento.age > 22
// });

// console.log(filtro);

// const animalitos = [
//     { nombre: "carlitos"  , especie: "conejo" },    // 0
//     { nombre: "esteban"   , especie: "perro" },     // 1
//     { nombre: "fabiruchis", especie: "tortuga" },   // 2
//     { nombre: "anita"     , especie: "gato" },      // 3
//     { nombre: "miranda"   , especie: "conejo" },    // 4
//     { nombre: "lucas"     , especie: "conejo" },    // 5
//     { nombre: "Horacia"   , especie: "tortuga" }    // 6
// ];

// const conejos = animalitos.filter( (elemento, index, lista) => {
//     return elemento.especie === "conejo"
// });

// console.log(conejos);

// const mascotas = [
//     { nombre: "Bimbo",    especie: "Hamster", comidasFavoritas: ["Semillas", "Nueces"] },
//     { nombre: "Ludovico", especie: "Perro",   comidasFavoritas: ["Huesos", "Jamon"] },
//     { nombre: "Pavlov",   especie: "Perro",   comidasFavoritas: ["Croquetas", "Pollo"] },
//     { nombre: "Chancla",  especie: "Gato",    comidasFavoritas: ["Atun", "Pescado"] },
//     { nombre: "Don Pepe", especie: "Perico",  comidasFavoritas: ["Semillas"] }
// ];

// const nombreMascotas = mascotas.map( (elemento, index, lista) => {
//     return elemento.nombre
// });

// console.log(nombreMascotas);

/*
Escribe una funcion que tome una cadena de palabras en minusculas y la regrese en mayusculas.
		Entrada: ["hola","como","estas"]
		Salida: ["HOLA","COMO","ESTAS"]
Crea una funcion que reciba como parametro una cadena de palabras y devuelva la cadena de caracteres modificadas en mayusculas y minusculas.
		Entrada:["Hola amigos", "cinta roja cdmx y gdl"," yei" ]
		Salida:["HOLA amigos", "CINTA roja CDMX y GDL","YEI"]
3. Hacer un arreglo de 4 cantidades de tiempo en minutos [120, 80, 200, 100], y agarrar sólo las que son mayores a dos horas (hacer la comparación en horas)
4.- A partir de esta lista [1, 3, 5, 7, 9], multiplicar todos los elementos por 7, y después sólo traer los que son menores a 30
*/

const arr1 = ["hola","como","estas"];
const arr1Out = arr1.map( (elemento, index, lista) => {
    // console.log(elemento.toUpperCase());
    return elemento.toUpperCase();
});
console.log(`ENTRADA: `,arr1);
console.log(`SALIDA: `,arr1Out);
const palabrasEntrada = 'palo zorro robot arduino raspberry';
console.log(`Palabras de entrada: ${palabrasEntrada}`);
function cadenaPalabras(palabras){
    let palabrasArrayIn = palabras.split(' ')
    const palabrasArrayOut = palabrasArrayIn.map( (elemento, index, lista) => {
        return elemento.toUpperCase();
    })
    console.log(palabrasArrayOut);
}
cadenaPalabras(palabrasEntrada);

const minutos = [120, 80, 200, 100];
console.log(`Minutos: ${minutos}`)
const mayores2Horas = minutos.map( (elemento, index, lista) => {
    return Math.floor(elemento / 60)
}).filter( (elemento, index, lista) => {
    return elemento > 2
})
console.log(`Horas: ${mayores2Horas}`)

const numeros = [1, 3, 5, 7, 9];
console.log(`Numeros a multiplicar ${numeros}`)
const resultados = numeros.map( (e, i, l) => {
    return e * 7
}).filter( (e, i, l) => {
    return e < 30
})
console.log(`Resultados ${resultados}`)