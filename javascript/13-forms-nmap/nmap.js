const form = [];
const form2 = [];

const adicionar = () =>  {
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
            juros: (valor * 0.01) * diffDays
        });
    } else {
        form.push({
            nome: nome,
            data: data,
            valor: valor,
            diffDays: diffDays
        });
    }

    appendTable(form.at(-1));
    console.log(form);
};

/*
const calcular = () => {
    let formObj = form.map(form => {
        if(form.diffDays >= 1){
            let juros = (form.valor * 0.01) * form.diffDays;
            //let total = formObj.valor + juros;
            return juros;
        }
    });

    
    form2.push({
        juros: juros
    });
    appendTable2(form2.at(-1));
    
};


const appendTable2 = (newCustomerData) => {
    let table2 = 
        `<tr>
            <td>${newCustomerData.juros}</td>
        </tr>`;
    
        document.getElementById("tabela-juros").innerHTML += table2;
}; */

const appendTable = (newCustomerData) => {
    let table = 
        `<tr>
            <td>${newCustomerData.nome}</td>
            <td>${newCustomerData.data}</td>
            <td>${newCustomerData.valor}</td>
        </tr>`;
    
        document.getElementById("tabela-pedidos").innerHTML += table;
};

function calcular() {
    document.getElementById("tabela-pedidos").innerHTML = `
    <tbody>
    <tr>
      <th>Nome</th>
      <th>Data de Vencimento</th>
      <th>Valor</th>
      <th>Juros</th>
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
        </tr>`;
    
        document.getElementById("tabela-pedidos").innerHTML += table;
};

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
  
  let grupodePessoas = agruparPor(form, 'nome');
  
  function distributeGroups(groupArray) {
    let result = [];
    for (let pessoa in groupArray){
      result.push(groupArray[pessoa]);
    }
    return result;
  }

  function agruparNome() {
    let x = distributeGroups(grupodePessoas)[0];
    
    document.getElementById("tabela-pedidos").innerHTML = `
    <tbody>
    <tr>
      <th>Nome</th>
      <th>Data de Vencimento</th>
      <th>Valor</th>
      <th>Juros</th>
    </tr>
    </tbody>`;
    x.map(form => appendTableByName(form));
    //form.map(form => appendTableByName(form));
}

const appendTableByName = (newCustomerData) => {
    let table = 
        `<tr>
            <td>${newCustomerData.nome}</td>
            <td>${newCustomerData.data}</td>
            <td>${newCustomerData.valor}</td>
            <td>${newCustomerData.juros ? newCustomerData.juros : ""}</td>
        </tr>`;
    
        document.getElementById("tabela-pedidos").innerHTML += table;
};

/*
<tbody>
<tr>
  <th>Nome</th>
  <th>Data de Vencimento</th>
  <th>Valor</th>
  <th>Juros</th>
</tr>
</tbody>*/