var saldo = 500;

do{
	cuenta = Number(prompt("Buen dia, Ingrese su numero de usuario"));
}while(isNaN(cuenta));
	alert("Bienvenido su numero de usuario es correcto.");

var validacion = true;

while(validacion){
	var opcion = prompt("Elija una opcion: " +
		"1. Retirar Dinero \n" +
		"2. Depositar Dinero \n" +
		"3. Mostrar Saldo \n");


	switch(opcion){
		case "1":
			var retiro = NaN;
			while(isNaN(retiro)){
				retiro = Number(prompt("Introduzca el monto a retirar " +
					"(Solo numeros)"));

				if(isNaN(retiro)){
					alert("El monto ingresado no es correcto");
				}else if(retiro > saldo){
					alert("No tiene suficientes fondos, " +
						"Capture otra cantidad");
					retiro = NaN;
				}else{
					saldo -= retiro;
					alert("Se retiraron " + retiro + " su saldo actual \n"
						+ "son " + saldo);
					validacion = false;
				} 
			}
			break;
		case "2":
			console.log(opcion);
			validacion = false;
			break;
		case "3":
			console.log(opcion);
			validacion = false;
			break;
		default:
			alert("Lo siento no reconozco la opcion seleccionada \n"
				+ "Selecciona otra opcion");
			break;
	}
} 
