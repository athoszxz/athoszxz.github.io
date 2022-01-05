let carroPopular = {
  velMax: Math.floor((Math.random() * 100) + 100) + 180,
  velMin: Math.floor((Math.random() * 100) + 130) + 110,
  derrapagem: Math.round(((Math.random()+ Number.EPSILON) * 1) + 3)/ 10,
}

let carroSport = {
  velMax: Math.floor((Math.random() * 100) + 100) + 195,
  velMin: Math.floor(Math.random() * 20) + 125,
  derrapagem: Math.floor(Math.random() * 0.03 ) + 0.02,
}

let carroSupSport = {
  velMax: Math.floor(Math.random() * 20) + 210,
  velMin: Math.floor(Math.random() * 20) + 140,
  derrapagem: Math.floor(Math.random() * 0.01 ) + 0.0175,
}

function sorteio() {
  let sort = Math.floor(Math.random() * 100) + 1;
  if (sort <= 60) {
    return carroPopular;
  } else if (sort > 60 && sort <= 95) {
    return carroSport;
  } else {
    return carroSupSport;
  }
}


function iniciarCorrida() {
  let sorteioPedro = sorteio();
  let sorteioJuca = sorteio();
  let sorteioEdna = sorteio();

  let pedroVMin = sorteioPedro.velMin;
  let pedroVMax = sorteioPedro.velMax;
  let pedroDerrapagem = sorteioPedro.derrapagem; 
  let jucaVMin = sorteioJuca.velMin;
  let jucaVMax = sorteioJuca.velMax;
  let jucaDerrapagem = sorteioJuca.derrapagem;
  let ednaVMin = sorteioEdna.velMin;
  let ednaVMax = sorteioEdna.velMax;
  let ednaDerrapagem = sorteioEdna.derrapagem;

  const corridaTipo = document.querySelector('input[name="corrida"]:checked').value;

  var contPedro = 0;
  var contJuca = 0;
  var contEdna = 0;

  //Escolher Corrida
  if (corridaTipo === 'rapida') {
      var corrida = 10;
  } else if (corridaTipo === 'grande') {
      var corrida = 70;
  } else if (corridaTipo === 'enduro') {
      var corrida = 160;
  }

  //Voltas
  for (var i = 0; i < corrida; i++) {
    var voltaPedro = Math.floor(Math.random() * pedroVMax ) + pedroVMin;
    voltaPedro = voltaPedro - (voltaPedro * pedroDerrapagem);
    var voltaJuca = Math.floor(Math.random() * jucaVMax ) + jucaVMin;
    voltaJuca = voltaJuca - (voltaJuca * jucaDerrapagem);
    var voltaEdna = Math.floor(Math.random() * ednaVMax ) + ednaVMin;
    voltaEdna = voltaEdna - (voltaEdna * ednaDerrapagem);
    if (voltaPedro > voltaJuca && voltaPedro > voltaEdna) {
      contPedro++;
    } else if (voltaJuca > voltaPedro && voltaJuca > voltaEdna) {
      contJuca++;
    } else if (voltaEdna > voltaPedro && voltaEdna > voltaJuca) {
      contEdna++;
    }
  }

  //Resultado
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


