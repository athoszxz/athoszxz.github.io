const fotoperfil = document.querySelector(".logotipo");
const nomeperfil = document.querySelector(".nometitulo");
const descperfil = document.querySelector(".descperfil");
const desc = document.querySelector(".desctitulo");
const el = document.querySelector(".article1title");
const foto = document.querySelector(".foto-lontra2");
const foto2 = document.querySelector("#cantor-foto2");
const lista = document.querySelector("#lista");


function header() {
    fotoperfil.src = "cancelado.jpg";
    nomeperfil.textContent = "Central de Cancelamento";
    desc.textContent = "Aqui o cancelamento é definitivo!";
}


function main() {
    el.textContent = "Digite o nome da vítima!";
    foto.src = "deathnote.jpeg";
}




header();
main();

function teste() {
    const fnameInput = document.querySelector('#fname').value;
    const lnameInput = document.querySelector('#lname').value;
    const pResultado = document.querySelector('#resultado');
    const imgMorte1 = document.querySelector('#imgMorte1');
    const imgMorte2 = document.querySelector('#imgMorte2');
    const resultSec = document.querySelector('#resultsec');
    pResultado.textContent = `Você matou ${fnameInput} ${lnameInput}!`;
    pResultado.style.color = "red";
    imgMorte1.src = "deathnote2.gif";
    imgMorte1.style.width = "350px";
    imgMorte1.style.height = "250px";

    imgMorte2.src = "ryuk.webp";
    imgMorte2.style.width = "350px";
    imgMorte2.style.height = "500px";

}

