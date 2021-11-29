  function getDadosPao(value) {
    if(value === '1') {
      return {
        label: 'Pão francês',
        preco: 3,
      }
    } else if(value === '2') {
      return {
        label: 'Pão Australiano',
        preco: 8,
      }
    } else if(value === '3') {
      return {
        label: 'Pão de Brioche',
        preco: 6,
      }
    } else {
      return {
        label: '',
        preco: 0,
      }
    }
  }
  
  function getDadosHamburguer(value) {
    if(value === '1') {
      return {
        label: 'Hambúrguer de picanha',
        preco: 13,
      }
    } else if(value === '2') {
      return {
        label: 'Hamburguer de costela',
        preco: 10,
      }
    } else if(value === '3') {
      return {
        label: 'Hamburguer Vegano',
        preco: 12,
      }
    } else {
      return {
        label: '',
        preco: 0,
      }
    }
  }
  
  function getDadosSalada(value) {
    if(value === '1') {
      return {
        label: 'Alface',
        preco: 1.5,
      }
    } else if(value === '2') {
      return {
        label: 'Tomate',
        preco: 1.5,
      }
    } else if(value === '3') {
      return {
        label: 'Sem salada',
        preco: 0,
      }
    } else {
      return {
        label: '',
        preco: 0,
      }
    }
  }
  
  function getDadosQueijo(value) {
    if(value === '1') {
      return {
        label: 'Mussarela',
        preco: 3,
      }
    } else if(value === '2') {
      return {
        label: 'Prato',
        preco: 3,
      }
    } else if(value === '3') {
      return {
        label: 'Cheddar',
        preco: 5,
      }
    } else {
      return {
        label: '',
        preco: 0,
      }
    }
  }
  
  let qtdePedido = 0
  
  function registarPedido() {
    qtdePedido += 1
    const paoValue = document.querySelector('input[name="pao"]:checked').value;
    const hamburguerValue = document.querySelector('input[name="hamburguer"]:checked').value;
    const saladaValue = document.querySelector('input[name="salada"]:checked').value;
    const queijoValue = document.querySelector('input[name="queijo"]:checked').value;

    const dadosPao = getDadosPao(paoValue)
    const dadosHamburguer = getDadosHamburguer(hamburguerValue)
    const dadosSalada = getDadosSalada(saladaValue)
    const dadosQueijo = getDadosQueijo(queijoValue)
  
    const tabela = document.querySelector('#tabela-pedidos')
  
    const tr = document.createElement('tr')
  
    const total = dadosPao.preco + dadosHamburguer.preco + dadosSalada.preco + dadosQueijo.preco
  
    const tdPedido = document.createElement('td')
    tdPedido.innerHTML = `#${qtdePedido}`
    const tdPao = document.createElement('td')
    tdPao.innerHTML = dadosPao.label
    const tdHamburguer = document.createElement('td')
    tdHamburguer.innerHTML = dadosHamburguer.label
    const tdSalada = document.createElement('td')
    tdSalada.innerHTML = dadosSalada.label
    const tdQueijo = document.createElement('td')
    tdQueijo.innerHTML = dadosQueijo.label
    const tdTotal = document.createElement('td')
    tdTotal.innerHTML = `R$${total}`
  
    tr.append(tdPedido)
    tr.append(tdPao)
    tr.append(tdHamburguer)
    tr.append(tdSalada)
    tr.append(tdQueijo)
    tr.append(tdTotal)
  
    tabela.append(tr)
  }