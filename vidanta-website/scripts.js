//Obtener el header
const header = document.querySelector('header');
const logo = document.querySelector('#logo img');

//Escuchar el evento de scroll
window.addEventListener('scroll', function () {
    if (window.scrollY > window.innerHeight) {
        header.className = 'scrolled';
        logo.src = "assets/vv-logo-cafe.png";
    } else {
        header.className = '';
        logo.src = "assets/vv-logo.png";
    }
});

var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 3,
    focus  : 'center',
  } );
  
  splide.mount();

  var splide2 = new Splide( '.ultimo-slider', {
    type   : 'loop',
    perPage: 2,
    focus  : 'center',
  } );
  
  splide2.mount();