function miPrimeraPromesa(numero){
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            numero === 5
                ? resolve('Se cumplio la promesa')
                : reject('No se cumplio la promesa')
        }, 3000);
    });
}

// Ejecucion de la funcion 
miPrimeraPromesa(5)
    .then( (resolve) => {
        console.log(resolve);
    })
    .catch( (reject) => {
        console.log(reject);
    });