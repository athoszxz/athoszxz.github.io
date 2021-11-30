

  function escrever () {
    var number = document.querySelector('#input-quadro').value;
    const quadro = document.querySelector('#lista-pedidos');

    while (number > 0) {
      const h2 = document.createElement('h2');
      h2.innerHTML = number;
      quadro.append(h2);
      number -= 1;
    }
  }

  
  