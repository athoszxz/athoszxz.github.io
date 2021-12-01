const quadro = document.querySelector('#lista-pedidos');
var contador = 0;

  function escrever () {
    var number = document.querySelector('#input-quadro').value;
    

    while (number > 0) {
      if (number % 11 != 0) {
        const h2 = document.createElement('h2');
        h2.innerHTML = "Bart Simpson tá doidão, cuidado!";
        quadro.appendChild(h2);
        number -= 1;
      }
      else {
        contador ++;

          quadro.removeChild();

        number -= 1;
      }
    }
  }


/* função que recebe um número e escreve a frase "Bart Simpson tá doidão, cuidado!" o número de vezes que o usuário digitou o número até 11 vezes com animação de digitação, caso o número seja divisível por 11, o quadro deve ser apagado e o contador deve ser incrementado. */ 