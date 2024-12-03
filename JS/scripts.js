/*Bucle While */
console.log("Bucle While")
let i = 0;
while(i < 8){
    console.log(i);
    i++;
}
console.log("-------------------");

/*Ejercicio Bucle For */
let animalesEnElZoologico = ["León", "Oso", "Jirafa", "Tigre"];
for(let i = 0; i<animalesEnElZoologico.length; i++){
    console.log("Este zoólogico tiene un " + animalesEnElZoologico[i] + ".");
}
/*Agregamos un índice en array */
console.log("Agregando un índice en el array");
animalesEnElZoologico[animalesEnElZoologico.length] = "Oso Polar";
for(let i = 0; i<animalesEnElZoologico.length; i++){
    console.log("Este zoólogico tiene un " + animalesEnElZoologico[i] + ".");
}
console.log("-------------------");

/*Funciones */
function listaDeAnimales(){
    for(let i = 0; i<animalesEnElZoologico.length; i++){
        console.log("Este zoólogico tiene un " + animalesEnElZoologico[i] + ". ");
    }
}
/*Agregando un índice con un animal nuevo*/
animalesEnElZoologico[animalesEnElZoologico.length] = "Pingüino";
/*Mandamos llamar a la función */
listaDeAnimales();