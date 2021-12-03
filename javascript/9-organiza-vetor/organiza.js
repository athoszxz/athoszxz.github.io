var arrayNumeros = [];
var arrayBackup = [2,3,1,7,5,6,4,8,9,10];
var conta = "nada";

function highest(...arguments){ 
    return arguments.sort(function(a,b){ 
      return b - a; 
    }); 
 }

function digito(elemento){  
    arrayNumeros.push(elemento); 
    displayArray();
    console.log(arrayNumeros);
}

function displayArray(){
    document.getElementById("textoCalculadora").innerHTML = arrayNumeros;
}

function resetar(){
    arrayNumeros = [];
    arrayBackup = [];
    document.getElementById("textoCalculadora").innerHTML = "0";
}

"função que reecebe um vetor de números e retorna ele ao contrário sem usar métodos de array"


function inverteVetor() {
    let novoVetor = [];
    for (let i = arrayNumeros.length - 1; i >= 0; i--) {
        novoVetor.push(arrayNumeros[i]);
    }
    //return novoVetor;
    document.getElementById("textoCalculadora").innerHTML = novoVetor;
}

"Função que recebe um vetor de números e retorna ele ordenado sem usar métodos de array"


function ordenaVetor() {
    let novoVetor = arrayNumeros;
    for (let i = 0; i < novoVetor.length; i++) {
        for (let j = 0; j < novoVetor.length; j++) {
            if (novoVetor[i] < novoVetor[j]) {
                let aux = novoVetor[i];
                novoVetor[i] = novoVetor[j];
                novoVetor[j] = aux;
            }
        }
    }
    //return vetor;
    document.getElementById("textoCalculadora").innerHTML = "fdfdfd";
    console.log(novoVetor);
    
}

"Função que ordena um vetor sem usar métodos de array"


function ordenaVetor2() {
    let novoVetor = [];
    for (let i = 0; i < arrayNumeros.length; i++) {
        for (let j = i + 1; j < arrayNumeros.length; j++) {
            if (arrayNumeros[i] > arrayNumeros[j]) {
                let aux = arrayNumeros[i];
                arrayNumeros[i] = arrayNumeros[j];
                arrayNumeros[j] = aux;
            }
        }
    }
    //return vetor;
    console.log(arrayNumeros);
    document.getElementById("textoCalculadora").innerHTML = arrayNumeros;
}


"método array que ordena um vetor"


function ordenaVetor3() {
    highest(arrayNumeros);
    console.log(arrayNumeros.sort());
    document.getElementById("textoCalculadora").innerHTML = arrayNumeros.sort();
}