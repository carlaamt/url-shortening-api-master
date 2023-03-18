var btnMobile = document.getElementById('btn-mobile');
var navbar = document.getElementById('contenido-nav');
btnMobile.addEventListener('click', function(){
    navbar.classList.toggle('contenido-nav');
    navbar.classList.toggle('nav-collapse');
    btnMobile.classList.toggle('btn-transform');
})