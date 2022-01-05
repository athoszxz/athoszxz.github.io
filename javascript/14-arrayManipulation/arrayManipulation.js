const vetorArray = [1, 2, 3, 4, 5];

const produtos = [
    { valor: 6.50, id: 1, categoria: 'limpeza', name: 'Amaciante' },
    { valor: 1.20, id: 2, categoria: 'limpeza', name: 'Detergente' },
    { valor: 6.90, id: 3, categoria: 'alimento', name: 'Ovo' },
    { valor: 2.00, id: 4, categoria: 'alimento', name: 'Alface' }
]

//Função com 1 parâmetro para testar a manipulação de array	
function dobro(valor){
    return valor * 2;
}

//Mesma função anterior, mas no formato Arrow Function com 1 parâmetro
const dobro2 = valor => valor * 2;

//Função no formato Arrow Function com 3 parâmetros, vai ser usada como callback
const somaProx = (valorAtual, indiceAtual, arrayToda) => {
    if(indiceAtual < arrayToda.length-1){
        return valorAtual + arrayToda[indiceAtual+1];
    }
    return valorAtual;
};

//=================== forEach() ====================================
/*O forEach executa o callback fornecido uma vez para cada elemento do Array, 
se o elemento for um objeto executa apenas nos que tenha um valor atribuido. */
produtos.forEach(function(elemento, index, array){
     //O callback do forEach() recebe 3 parâmetros: o elemento atual, o índice e o array de elementos completo.
     //É repetido para cada elemento do array (neste exemplo 4 vezes) e o callback é executado para cada um.
     console.log("Elemento Atual = ${elemento}, Index = ${index}, Array de elementos ${array}");
     console.log("Elemento Atual Especificado = ${elemento.name}, Index = ${index}, Array de Elementos Especificado = ${array[index]}");
     console.log();
 });


//=================== map() =======================================

//map() - Pode usar até 3 parâmetros, o primeiro é o valor atual, o segundo é o índice atual e o terceiro é o array todo.

//map() com chamada de função no formato clássico com 1 parâmetro
let mapDobro1 = vetorArray.map(dobro);//retorna [2, 4, 6, 8, 10]

//map() com função anônima de seta inline com 1 parâmetro
let mapDobro2 = vetorArray.map(x => x * 2);//retorna [2, 4, 6, 8, 10]

//map() com função anônima inline completa
let mapDobro3 = vetorArray.map(function(item){
    return item * 2;//retorna [2, 4, 6, 8, 10]
});

//map com chamada de função no formato clássico com 3 parâmetros
let mapSomaProx1 = vetorArray.map(somaProx);//retorna [3, 5, 7, 9, 5]

//map() com função anônima de seta com 3 parâmetros (não funciona, pois o formato de seta só aceita 1 parâmetro no map).
// console.log(vetorArray.map(item, indice, arrayToda => {
//     if(indice < arrayToda.length-1){
//         return item + arrayToda[indice+1];
//     }
//     return item;
// }));

//map() com função anônima inline completa com 3 parâmetros
let mapSomaProx2 = vetorArray.map(function(item, indice, arrayToda){
    if(indice < arrayToda.length-1){
        return item + arrayToda[indice+1];
    }
    return item;
});//retorna [3, 5, 7, 9, 5]

//reduce() e sort() ordenando por categoria
let listaHtml = produtos.map(item => item);

//criando lista HTML com map() a partir de um array de objetos
let listaHtml2 = produtos.map(item => `<li>${item.name}</li>`);

//criando lista completa com <ul> HTML com map() e função anônima inline a partir de um array de objetos
let listaHtmlCompleta = `<ul>${produtos.map(item => `<li>${item.name}</li>`).join('')}</ul>`;

//criando lista completa com <ul> HTML com map() e função anônima inline completa a partir de um array de objetos
let listaHtmlCompleta2 = `<ul>${produtos.map(function(item){
    return `<li>${item.name}</li>`}).join('')}</ul>`; //pode por em uma variavel antes de retornar

//map feito em uma função separada a partir de um array de objetos
function list(nameForms) {
    return `<ul>${nameForms.map(function(item){
        return `<li>${item.name}</li>`}).join('')}</ul>`;
}
let listaHtmlCompleta3 = list(produtos);

//=================== filter() ======================================

//filter() com função separada a partir de um array de objetos
const isAlimento = produto => produto.categoria === 'alimento';
const alimentos = produtos.filter(isAlimento);

//filter() com função anônima inline a partir de um array de objetos
const alimentos2 = produtos.filter(item => item.categoria === 'alimento');

//filter() com função anônima inline completa a partir de um array de objetos
const alimentos3 = produtos.filter(function(item){
    return item.categoria === 'alimento';
});

//filter() com map() a partir de um array de objetos
const alimentos4 = produtos.filter(item => item.categoria === 'alimento').map(item => `<li>${item.id}</li>`);



//=================== reduce() ======================================

//reduce() com função separada
const soma = (acumulado, item) => acumulado + item;
const somaTotal = vetorArray.reduce(soma);

//reduce() com função anônima inline
const somaTotal2 = vetorArray.reduce((acumulado, item) => acumulado + item);

//reduce() com função anônima inline completa
const somaTotal3 = vetorArray.reduce(function(acumulado, item){
    return acumulado + item;
});

//reduce() com função anônima inline a partir de um array de objetos com if
//o if é necessário para não retornar undefined, pois na primeira itereação o acumulado é undefined e depois vira number
const somaTotal4 = produtos.reduce((acumulado, item) => {
    if(acumulado.valor){
        return acumulado.valor + item.valor;
    }
    return acumulado + item.valor;
});

//reduce() com função anônima inline a partir de um array de objetos sem if
//reduce implementou um segundo parametro após o callback, que é o valor inicial do acumulado para não ficar como undefined (coloque 0 em somas e subtrações, 1 em multiplicações e divisões)
const somaTotal5 = produtos.reduce((acumulado, item) => acumulado + item.valor, 0);
const multTotal = produtos.reduce((acumulado, item) => acumulado * item.valor, 1);

//reduce() a partir de um array de objetos
const somaTotal6 = produtos.reduce((acumulado, item) => acumulado + item.valor, 0);

//reduce() com filter() a partir de um array de objetos
const somaTotal7 = produtos.filter(item => item.categoria === 'alimento').reduce((acumulado, item) => acumulado + item.valor, 0);


//=================== sort() ======================================
function compareName( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

function compareValor( a, b ) {
    if ( a.valor < b.valor ){
      return -1;
    }
    if ( a.valor > b.valor ){
      return 1;
    }
    return 0;
}

//ordenar por valor com localeCompare():
//produtos.sort((a, b) => a.valor.toString().localeCompare(b.valor)); //altera o array original

//Ordenar por valor com sort() + função criada compareValor():
//console.log(listaHtml.sort(compareValor)); //não altera o array original 


//=================== setInterval() ======================================


function sortear() {
    var numbers = [];
    var i = 0;
    var min = 1, max = 60, p;

    //resetar a página HTML
    document.getElementById("tabela-pedidos").innerHTML = 
    `<tr>
        <th>Números</th>
    </tr>`;

    //set interval como loop
    const timer = setInterval(function() {
        do {
            n = Math.floor(Math.random() * (max - min + 1)) + min;
            p = numbers.includes(n);
            if(!p){
                ++i;
                if (i === 6) clearInterval(timer); 
                numbers.push(n);
                document.getElementById("tabela-pedidos").innerHTML +=  
                `<tr>
                    <td>${n}</td>
                </tr>`;
            }
        } while(p);
    }, 1000);
}

//=================== callback e leitura de dados pelo console ======================================

function greeting(name) {
    console.log('Oi ' + name);
  }
  
function processUserInput(callback) {
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question("Qual o seu nome? ", function (answer) {
        callback(answer);    
        rl.close();
    });    
}
  
//processUserInput(greeting);

