var arrayNumeros = [];
var arrayBackup = [];
var conta = "nada";

function digito(elemento){
    arrayNumeros = arrayNumeros + parseInt(elemento.innerHTML); 
    displayArray();
}

function displayArray(){
    document.getElementById("textoCalculadora").innerHTML = arrayNumeros;
}

function resetar(){
    arrayNumeros = [];
    arrayBackup = [];
    document.getElementById("textoCalculadora").innerHTML = "0";
}

function calcular(elemento, operacao){
    document.getElementById("textoCalculadora").innerHTML = elemento.innerHTML;
    /*arrayNumeros.join('');*/
    arrayBackup = parseInt(arrayNumeros); 
    arrayNumeros = [];
    conta = operacao;
}

function resultado(){
    var result
    if (conta == 'somar') {
        result = arrayBackup + parseInt(arrayNumeros);
        document.getElementById("textoCalculadora").innerHTML = result;
        arrayNumeros = [];
        arrayBackup = [];
    }
    else if(conta == "subtrair"){
        result = arrayBackup - parseInt(arrayNumeros);
        document.getElementById("textoCalculadora").innerHTML = result;
        arrayNumeros = [];
        arrayBackup = [];
    }
    else if(conta == "dividir"){
        result = arrayBackup / parseInt(arrayNumeros);
        document.getElementById("textoCalculadora").innerHTML = result;
        arrayNumeros = [];
        arrayBackup = [];
    }
    else if(conta == "multiplicar"){
        result = arrayBackup * parseInt(arrayNumeros);
        document.getElementById("textoCalculadora").innerHTML = result;
        arrayNumeros = [];
        arrayBackup = [];
    }
    else{
        document.getElementById("textoCalculadora").innerHTML = "Pamonha";
    }

}


/*Função para calculadora simples*/
function calculoSimples(operacao){
    const num1 = document.querySelector('#numero1').value;
    const num2 = document.querySelector('#numero2').value;
    const resultado = document.querySelector('#resultado');
    if (operacao == 'somar') {
        resultado.textContent = parseInt(num1) + parseInt(num2);
    }
    else if(operacao == "subtrair"){
        resultado.textContent = parseInt(num1) - parseInt(num2);
    }
    else if(operacao == "dividir"){
        resultado.textContent = parseInt(num1) / parseInt(num2);
    }
    else if(operacao == "multiplicar"){
        resultado.textContent = parseInt(num1) * parseInt(num2);
    }
    else{
        resultado.textContent = "Pamonha";
    }
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