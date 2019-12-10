function divEsEntero(num1, num2) {
	let residuo = num1 % num2;
	
	if(residuo == 0){
		return true;
	}
	
	return false;
}

const divEsEntero2 = (num1, num2) => (num1 % num2) == 0;

for(let i = 0; i <= 1000; i++){
	console.log(i);
}


1.- Escriba un programa que pida dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.
2- Escriba un programa que pida el año actual y un año cualquiera y que escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.

3 Escriba un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos.
4- Pedir tres números y obtener el mayor de ellos.
1.Hacer un programa que imprima en pantalla los números del 1000 al 1.
 2.Hacer un programa que muestre los números pares que hay entre 0 y 1000.
3.Hacer un programa que sume los numeros que hay entre 0 y 10.


function mayorNumero(num1, num2) {
	if(num1<num2) return num1 + " es menor que " + num2;
	if(num1>num2) return num1 + " es mayor que " + num2;
	if(num1==num2) return num1 + " es igual que " + num2;
}

function difAnios(anio1, anio2) {
	if(anio1>anio2)
		return "de "+anio1+" han transcurrido " anio1-anio2 +" años";
	if(anio1<anio2)
		return "faltan "+anio1-anio2+" años para llegar al año " anio2;
}

function comparaNums(num1, num2, num3) {
	if(num1 === num2 && num1 === num3) return "Los tres son iguales";
	if(num1 === num2 && num1 === num3) return "Los tres son iguales";

}

function comparaNums(num1, num2, num3) {
	let mayor;
	if(num1>num2) mayor = num1;
	if(num2>num3) mayor = num2;
	if(num3>num1) mayor = num3; 

}

function pares(){
	for(let i = 0; i <= 1000; i++){
		if(i%2 == 0)
			console.log(i);
	}	
}

for(let i = 1000; i >= 1; i--){
	console.log(i);
}

for (let i = 0; i <= 10; i++) {
	let h = i + (i+1);
	console.log(h);
}

