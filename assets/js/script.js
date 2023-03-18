var btnMobile = document.getElementById('btn-mobile');
var navbar = document.getElementById('contenido-nav');
btnMobile.addEventListener('click', function(){
    navbar.classList.toggle('btn-mobile');
    btnMobile.classList.toggle('btn-transform');
})