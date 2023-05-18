var btnMobile = document.getElementById('btn-mobile');
var navbar = document.getElementById('contenido-nav');
btnMobile.addEventListener('click', function(){
    navbar.classList.toggle('contenido-nav');
    navbar.classList.toggle('nav-collapse');
    btnMobile.classList.toggle('btn-transform');
})

const shortly = document.querySelector('#btn-link');
const link = document.querySelector('#input-link');
const result = document.querySelector('.result');

shortly.addEventListener('click', (e) => {
  e.preventDefault();
  const url = link.value;

  shortenUrl(url);
});

async function shortenUrl(url) {
    try{
        const api = await fetch(`https://api.shrtco.de/v2/shorten?url= + url`);
        const data = await api.json();
        const short = document.createElement('div');
        short.classList.add('item');
        short.innerHTML = `
            <p> ${data.result.short_link}</p>
            <button class="copy-btn">Copy</button>`;
        result.prepend(short);
        const copyBtn = result.querySelector('.copy-btn');
        copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
        });
        link.value = "";
    } catch (err){
        console.log(err);
    }
}
