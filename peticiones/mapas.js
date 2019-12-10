const listaObj = [
    {nombre: "lola", age: 20},
    {nombre: "lola2", age: 20},
    {nombre: "lola3", age: 20},
    {nombre: "lola4", age: 20},
    {nombre: "lola6", age: 20}
];


const listaNombres = listaObj.map( (element, index, lista) => {
    console.log(element.nombre);
    return element.nombre
});

console.log(listaNombres);