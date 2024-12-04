let clave = prompt("Ingresa la contraseña: ");

// if(clave != "Inadaptados"){
//     alert("Contraseña incorrecta!");
// }

while(clave != "Inadaptados"){
    alert("Contraseña incorrecta!");
    clave = prompt("Ingresa la contraseña: ");
}

let contador = 1;
while(contador <= 5){
    alert("Contador bucle-While " + contador);
    contador++;
}

let cuenta_for;
for(cuenta_for=10; cuenta_for<=15; cuenta_for++){
    alert("Contador bucle-for " + cuenta_for);
}