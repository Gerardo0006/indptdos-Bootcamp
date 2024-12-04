function cambiaColor(){
    /*window -> se refiere a la ventana */ /*document -> se refiere al body */
    let titulo = document.querySelector('h1');
    // titulo.innerHTML = "Título cambiado desde JS";
    if(titulo.className == 'texto-verde'){
        titulo.className = 'texto-rojo';
    } else{
        titulo.className = 'texto-verde';
    }
}

function cambiarImagen(){
    let imagen = document.querySelector('#imagen');
    imagen.src = "..//Escuela_alumnos/img/laboratorio.png"
    // if(imagen.src == "../Escuela_alumnos/img/computadora.png"){
    //     imagen.src = "..//Escuela_alumnos/img/laboratorio.png";
    // } else{
    //     imagen.src == "..//Escuela_alumnos/img/laboratorio.png"
    // }
}