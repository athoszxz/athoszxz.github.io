const fotoperfil = document.querySelector(".fotoperfil");
const nomeperfil = document.querySelector(".nomeperfil");
const descperfil = document.querySelector(".descperfil");
const desc = document.querySelector(".desc");
const el = document.querySelector(".nome");
const foto = document.querySelector(".cantor-foto");
const prg = document.querySelector("#prg");
const foto2 = document.querySelector("#cantor-foto2");
const lista = document.querySelector("#lista");
const link = document.querySelector("#link");

descperfil.textContent = "Sobre Mim";
fotoperfil.src = "athos.png";
nomeperfil.textContent = "Athos Balmant";
desc.textContent = "29 Anos";

el.textContent = "Michael Jackson";
foto.src = "michael2.gif";
prg.textContent = "Meu cantor preferido é o Michael Jackson"; 
foto2.src = "michael3.gif";
lista.textContent = "Melhores Músicas";
document.querySelector("#m1").textContent = "Billie Jean";
document.querySelector("#m2").textContent = "Beat It";
document.querySelector("#m3").textContent = "Thriller";
document.querySelector("#link").textContent = "Biografia";
document.querySelector("#link").href = "https://pt.wikipedia.org/wiki/Michael_Jackson";