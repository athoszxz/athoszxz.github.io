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
    console.log(form);
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
        console.log(table);
};

function ordenarData(){
    form.sort((a, b) => a.data.toString().localeCompare(b.data));
    document.getElementById("tabela-pedidos").innerHTML = `
    <tbody>
    <tr>
      <th>Nome</th>
      <th>Data de Vencimento</th>
      <th>Valor</th>
    </tr>
    </tbody>`;
    form.map(form => appendTable(form));
    console.log(form);
}


function ordenarNome(){
    form.sort((a, b) => a.nome.toString().localeCompare(b.nome));
    document.getElementById("tabela-pedidos").innerHTML = `
    <tbody>
    <tr>
      <th>Nome</th>
      <th>Data de Vencimento</th>
      <th>Valor</th>
    </tr>
    </tbody>`;
    form.map(form => appendTable(form));
    console.log(form);
}

function filtrarNome(){
    let nome = document.getElementById("nomeFilter").value;
    document.getElementById("tabela-pedidos").innerHTML = `
    <tbody>
    <tr>
      <th>Nome</th>
      <th>Data de Vencimento</th>
      <th>Valor</th>
    </tr>
    </tbody>`;
    form.filter(item => item.nome === nome).map(form => appendTable(form));
    console.log(form2);
}





//interação do botão de autoriazação do formulário
function activeBox()
{
    if ( $('.form label .box').hasClass('active') )
    {
        $('.form label .box').removeClass('active')
    }
    else
    {
        $('.form label .box').addClass('active')
    }
}

$('.form label .box').on('click', function(){
    activeBox();
})

$('.form label sup').on('click', function(){
    activeBox();
})
//interação do botão de autoriazação do formulário FIM
