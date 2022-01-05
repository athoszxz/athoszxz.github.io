/*const Cars = {
    "carroPopular": {
        "velMax": 0, 
        "velMin": 0, 
        "derrapagem": 0 
      },
      "carroSport": {
        "velMax": 0, 
        "velMin": 0, 
        "derrapagem": 0 
      },
      "carroSupSport": {
        "velMax": 0, 
        "velMin": 0, 
        "derrapagem": 0
      }
  }

  const players = [
    {
      player: "Pedro",
      exp:2,
      lvl:0 
    },
    {
      player: "Juca",
      exp:2,
      lvl:0
    },
    {
      player: "Edna",
      exp:2,
      lvl:0
    }
  ];


  let a = players;
    
	let b = a.map(el => {
    return {
      player: el.player + 1,
      exp: el.exp + 1,
      lvl: el.lvl + 1
    }
  });

  let c = form.map(el => {
    return {
      player: el.player + 1,
      exp: el.exp + 1,
      lvl: el.lvl + 1
    }
  });
  

*/

/*
const form = [];

function adicionar(){
  let nome = document.getElementById("nome").value;
  let data = document.getElementById("data").value;
  let valor = document.getElementById("valor").value;

  var date1 = new Date(data);
  var date2 = new Date();
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  
  if (diffDays >= 1) {
      form.push({
          nome: nome,
          data: data,
          valor: valor,
          diffDays: diffDays,
          juros: (valor * 0.01) * diffDays,
          total: (valor * 0.01) * diffDays + valor
      });
  } else {
      form.push({
          nome: nome,
          data: data,
          valor: valor,
          diffDays: diffDays
      });
  }
  document.getElementById("tabela").innerHTML = `
  <tbody>
  <tr>
    <th>Nome</th>
    <th>Data de Vencimento</th>
    <th>Valor</th>
  </tr>
  </tbody>`;
  //createTable(form.at(-1));
  form.map(form => createTable(form)); // usando map para criar a tabela
}


const createTable = (newCustomerData) => {
  let table =  
  `<tr>
    <td>${newCustomerData.nome}</td>
    <td>${newCustomerData.data}</td>
    <td>${newCustomerData.valor}</td>
  </tr>`; 
  
  document.getElementById("tabela").innerHTML += table;
};

function calcular() {
  document.getElementById("tabela").innerHTML = `
  <tbody>
  <tr>
    <th>Nome</th>
    <th>Data de Vencimento</th>
    <th>Valor</th>
    <th>Juros</th>
    <th>Total</th>
  </tr>
  </tbody>`;
  form.map(form => appendTableWithJuros(form));
  }

const appendTableWithJuros = (newCustomerData) => {
  let table = 
      `<tr>
          <td>${newCustomerData.nome}</td>
          <td>${newCustomerData.data}</td>
          <td>${newCustomerData.valor}</td>
          <td>${newCustomerData.juros ? newCustomerData.juros : ""}</td>
          <td>${newCustomerData.total ? newCustomerData.total : ""}</td>
      </tr>`;
  
      document.getElementById("tabela").innerHTML += table;
};

*/
let dataAtual = new Date();
let data1 = new Date('2021-12-05');
let data2 = new Date('2021-12-04');
let data3 = new Date('2021-12-03');

let pessoas = [
  { nome: 'Alice', idade: 21, data: data1, diffDays: diffDays(data1) },
  { nome: 'Alice', idade: 21, data: data1, diffDays: diffDays(data1) },
  { nome: 'Max', idade: 20, data: data2, diffDays: diffDays(data2) },
  { nome: 'Jane', idade: 20, data: data3, diffDays: diffDays(data3) },
];

function diffDays(data1) {
  let timeDiff = Math.abs(data1.getTime() - dataAtual.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}


function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {


    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let grupodePessoas = agruparPor(pessoas, 'nome');

function distributeGroups(groupArray) {
  let result = [];
  
  for (let pessoa in groupArray){
    result.push(groupArray[pessoa]);
  }
  return result;
}

//console.log(distributeGroups(grupodePessoas)[0]);


/*const sonsHtml = grupodePessoas.reduce((acc, agrupados,index,) => {
  return (acc += `
  <li>${agrupados.nome}</li>
  <li>${agrupados.idade}</li>
  `);
  }, ""); 
*/
//distributeGroups(grupodePessoas);
  /*for(let i in grupodePessoas){
    console.log(i);
  } */

  //console.log(sonsHtml); 


/*
console.log(grupodePessoas['Alice'][0].nome); 
<li>${agrupados["nome"][index].idade}</li>
let date1 = new Date('2021-12-01');
let date2 = new Date();
const pessoasHtml = pessoas.reduce((acc, pessoa) => acc += 
`<li>${pessoa.nome}</li>
<li>${pessoa.idade}</li>`, '');

var timeDiff = Math.abs(date2.getTime() - date1.getTime());
let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

//console.log(pessoasHtml);
console.log(diffDays);
*/

/*
const sons = ["auau", "miau", "cócóricó"];
const sonsHtml = sons.reduce((acc, som) => acc += `<li>${som}</li>`, "");

console.log(sonsHtml);
*/

const sons = {'10': [
  {
    nome: 'Alice',
    idade: 21,
    data: data1,
    diffDays: 10
  }
],
'11': [
  {
    nome: 'Max',
    idade: 20,
    data: data2,
    diffDays: 11
  }
],
'12': [
  {
    nome: 'Jane',
    idade: 20,
    data: data3,
    diffDays: 12
  }
]};

// const createTable = (data) => {
//   let table = 
//   `<tr>
//     <td>${data[0]}</td>
//     <td>${data[1]}</td>
//     <td>${data[2]}</td>
//     <td>${data[3]}</td>
//   </tr>`; 
  
//   console. table;
// }

function dobro(valor){
  return valor * 2;
}
var teste = [1, 2, 3, 4, 5];

//console.log(teste[0]);
console.log(teste.map(function(item){
  return dobro(item)+2;
  }));

console.log(teste.map(dobro));

console.log(teste);


