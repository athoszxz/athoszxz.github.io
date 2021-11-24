const fotoperfil = document.querySelector(".logotipo");
const nomeperfil = document.querySelector(".nometitulo");
const descperfil = document.querySelector(".descperfil");
const desc = document.querySelector(".desctitulo");
const el = document.querySelector(".article1title");
const foto = document.querySelector(".foto-lontra2");
const prg = document.querySelector("#article1prg");
const foto2 = document.querySelector("#cantor-foto2");
const lista = document.querySelector("#lista");
const link = document.querySelector("#link");

function header() {
    fotoperfil.src = "lontra1.png";
    nomeperfil.textContent = "Mundo das Lontras";
    desc.textContent = "Para aqueles que adoram lontras!";
}


function main() {
    el.textContent = "Lontras dão as mãos";
    foto.src = "lontra2.gif";
    prg.textContent = "Lontras dão as mãos para não flutuarem longe uma das outras."; 
    link.textContent = "Fonte"
    link.href = "https://pt.wikipedia.org/wiki/Michael_Jackson";
}


header();
main();