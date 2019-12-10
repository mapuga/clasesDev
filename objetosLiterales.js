const ayudanteDeSanta = {
	ojos: 2,
	patas: 4,
	nombre: 'ayudante de santa',
	raza: 'Galgo',
	ladrar: function () {
		return "Waaaaau";
	},
	comer: function (comida) {
		if(comida === 'croquetas'){
			return 'wacala';
		} else {
			return 'yomi yomi';
		}
	}
}

console.log(ayudanteDeSanta.comer('croquetas'));


const myPenguin = {
	character: 'Pingu',
	origin: 'Pingu',
	notes: 'The title character of the series',
	getNombre: function () {
		return `Hola, soy un pingüino y mi nombre es ${this.character}`;
	},
	puedeVolar: function (){
		return false;
	}
}

const myPenguin = {
	character: 'Pingu',
	origin: 'Pingu',
	notes: 'The title character of the series',
	getNombre: function () {
		return `Hola, soy un pingüino y mi nombre es ${this.character}`;
	},
	puedeVolar: function (){
		return false;
	},
	const graznar = () => (return "kaww kaww!!");
}

