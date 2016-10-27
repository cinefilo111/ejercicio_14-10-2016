/* Ejercicio sobre:
   
   Alert
   confirm
   Math
   Prompt
   Number
   
   if() {
	
   }
   else {
	
   }
*/
alert("Hola, Bienvenido");

n_cuenta = prompt("Introduce tu NIP");

if(isNaN(n_cuenta)) {
	alert("Error, no es un número válido.");
}
else {
	alert("Bien, se ha introducido un número");

	cantidad = prompt("Introduce la cantidad a depositar:");	

	if (isNaN(cantidad)) {
		alert("Error");
	}
	else {
		alert("Listo, se ha tenido EXITO.");
	}
}
