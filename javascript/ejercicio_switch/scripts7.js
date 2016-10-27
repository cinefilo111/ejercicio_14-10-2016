// El navegador saluda y pide el numero
// de cuenta del usuario

var saldo = 500;

var cuenta=NaN;

while(isNaN(cuenta)) {
  var cuenta = Number(prompt("Buen dia, Ingrese su numero de usuario"));
  console.log(cuenta);

  if(isNaN(cuenta)){
	alert("El numero no es correcto, inténtalo de nuevo:");
  } 
}

opcion = 0;
do {
	var opcion = Number(prompt("Gracias por introducir su numero de cuenta.\n\n Que desea hacer: \n\n"
		+ "*** M E N U ***\n\n"
		+ "1. Retirar dinero \n"
		+ "2. Depositar dinero \n"
		+ "3. Revisar mi saldo \n"
	    + "4. Salir \n\n"
	    + "Elija una opción (1-4)\n\n"));


  switch(opcion) {
	
		case 1:
	  		cantidad = prompt("Cuanto: ");
	  		if(isNaN(cantidad)){
	    		alert("Error.")
	  		}
      
      		else{
	  	    	if(cantidad>saldo){
	    	  		alert("Epa, no tienes tanta lana.");
	    		}

	    		else{
	      			saldo = saldo - Number(cantidad);
	      			//saldo -= Number(cantidad);
          			alert("Retiraste: " + Number(cantidad)+ "\n\n" + "Tu nuevo saldo: " + saldo);
	    		}
	  		}  
	
		break;
	
		case 2:

  	   		cantidad = prompt("Cuanto: ");
	   		if(isNaN(cantidad)){
	     		alert("Error.")
	   		}
	   		else{
	     		// saldo = saldo + Number(cantidad);
	     		saldo += Number(cantidad);
	     		alert("Tu nuevo saldo: " + saldo);
	   		}
			break;
		
		case 3:
	   		alert("Tu saldo es: ", saldo);
		break;

		case 4:
		break;
  } 

}while(isNaN(opcion) || (opcion<1 || opcion > 4));

