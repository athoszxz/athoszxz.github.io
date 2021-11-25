var arrayNumeros = [];

function digito(conteudo){
    arrayNumeros = arrayNumeros + conteudo; 
    document.getElementById("textoCalculadora").innerHTML = arrayNumeros;
}

function resetar(){
    arrayNumeros = [];
    document.getElementById("textoCalculadora").innerHTML = "0";
}

function resultado(){
  var result = stringMath(arrayNumeros); //Função do node.js, ela equaciona uma string ex: "2+2*2" = 6
  document.getElementById("textoCalculadora").innerHTML = result;
}
  
function teste(){
    console.log(arrayNumeros);
}



























/* Date
var d = new Date();
alert(d);
alert(d.getMonth()+1);
*/

/* for
var count;
for(count = 0; count <= 5; count++){
    alert(count);
}
*/ 

/* while
var count = 0;
while (cont >= 5){
    alert(count);
    count++;
}
*/

/* prompt e confirm

var idade = prompt("Qual sua idade?");

var wantsToPlayAgain = confirm("Would you like to play again?"); 
if(wantsToPlayAgain){ 
    console.log("Ok is true"); 
} else { 
    console.log("cancel is false"); 
}
console.log("Bem vindo " + nome);
*/