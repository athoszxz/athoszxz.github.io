
const pedroVMin = 150;
const pedroVMax = 230;
const pedroDerrapagem = 0.03; 
const jucaVMin = 120;
const jucaVMax = 260;
const jucaDerrapagem = 0.05;
const ednaVMin = 180;
const ednaVMax = 220;
const ednaDerrapagem = 0.01;

function iniciarCorrida() {
  const corridaTipo = document.querySelector('input[name="corrida"]:checked').value;
  var contPedro = 0;
  var contJuca = 0;
  var contEdna = 0;
  if (corridaTipo === 'rapida') {
      var corrida = 10;
  } else if (corridaTipo === 'grande') {
      var corrida = 70;
  } else if (corridaTipo === 'enduro') {
      var corrida = 160;
  }

  for (var i = 0; i < corrida; i++) {
    var voltaPedro = Math.floor(Math.random() * pedroVMax ) + pedroVMin;
    var voltaJuca = Math.floor(Math.random() * jucaVMax ) + jucaVMin;
    var voltaEdna = Math.floor(Math.random() * ednaVMax ) + ednaVMin;
    if (voltaPedro > voltaJuca && voltaPedro > voltaEdna) {
      contPedro++;
    } else if (voltaJuca > voltaPedro && voltaJuca > voltaEdna) {
      contJuca++;
    } else if (voltaEdna > voltaPedro && voltaEdna > voltaJuca) {
      contEdna++;
    }
  }
  if (contPedro > contJuca && contPedro > contEdna) {
    alert('Pedro ganhou a corrida!');
  } else if (contJuca > contPedro && contJuca > contEdna) {
    alert('Juca ganhou a corrida!');
  } else if (contEdna > contPedro && contEdna > contJuca) {
    alert('Edna ganhou a corrida!');
  } else {
    alert('Empate!');
  } 
}


