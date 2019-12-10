const request = require('request');
const url_api = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

function crateAuthor(nombre,apellidos,nac,bio,gender,age){
	const jsonSend = {
		"name": nombre,
		"last_name": apellidos,
		"nacionalidad": nac,
		"biography": bio,
		"gender": gender,
		"age": age
	}

	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			request.post(`${url_api}`, {form: jsonSend}, (err, res, body) => {
				res.statusCode === 201 
					? resolve(JSON.parse(body))
					: reject('Error al crear el Autor')
			}, 3000);
		});
	});
}


function updateNameAuthorById(idAuthor, nombre){
	const jsonSend = {
		"name": nombre
	}

	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			request.patch(`${url_api}${idAuthor}/`, {form: jsonSend}, (err, res, body) => {
				res.statusCode === 200 
					? resolve(JSON.parse(body))
					: reject('Error al actualizar nombre')
			});
		} ,3000);
	});
}

function readById(idAuthor){
	const jsonSend = {
		"id": idAuthor
	}

	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			request.patch(`${url_api}${idAuthor}/`, (err, res, body) => {
				res.statusCode === 200
					? resolve(JSON.parse(body))
					: reject('Error al obtener Autor')
			});
		}, 3000);
	});
}

function deleteById(idAuthor){
	const jsonSend = {
		"id": idAuthor
	}

	return new Promise( (resolve, reject) => {
		setTimeout( () => {
			request.delete(`${url_api}${idAuthor}/`, (err, res, body) => {
				res.statusCode === 204
					? resolve()
					: reject('Error al eliminar Autor')
			});
		}, 3000);
	});
}

crateAuthor('Diana','Divina','MX','super vieja','F','82')
	.then( (nuevo) => {
		console.log(`Autor creado:`, nuevo)
		return readById(nuevo.id)
	})
	.then( (leido) => {
		console.log(`Cambio de nombre: Paquito`, leido)
		return  updateNameAuthorById(leido.id, 'Paquito')
	})
	.then( (leido) => {
		console.log(`Elimino a Paquito`, leido)
		return deleteById(leido.id)
	})
	.catch( (err) => console.log(err) )
