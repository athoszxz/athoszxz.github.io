const Cars = {
  "carroPopular": {
      "name": "Carro Popular",
      "velMax": 0, 
      "velMin": 0, 
      "derrapagem": 0 
    },
    "carroSport": {
      "name": "Carro Sport",
      "velMax": 0, 
      "velMin": 0, 
      "derrapagem": 0 
    },
    "carroSupSport": {
      "name": "Carro Super Sport",
      "velMax": 0, 
      "velMin": 0, 
      "derrapagem": 0
    }
}

const players = [
  {
    player: "Pedro",
    exp:0,
    lvl:0 
  },
  {
    player: "Juca",
    exp:0,
    lvl:0
  },
  {
    player: "Edna",
    exp:0,
    lvl:0
  }
];

function sorteioCarro() {
    let sort = Math.floor(Math.random() * 100) + 1;
    //Inicializando o carro
    Cars.carroPopular.velMax = Math.floor(Math.random() * 20) + 180;
    Cars.carroPopular.velMin = Math.floor(Math.random() * 20) + 110;
    Cars.carroPopular.derrapagem = Math.round(((Math.random()+ Number.EPSILON) * 1) + 3)/ 10; //retorna um número entre 0.03 e 0.04
    Cars.carroSport.velMax = Math.floor(Math.random() * 20) + 195;
    Cars.carroSport.velMin = Math.floor(Math.random() * 20) + 125;
    Cars.carroSport.derrapagem = Math.round(((Math.random()+ Number.EPSILON) * 1) + 2)/ 10; //retorna um número entre 0.02 e 0.03
    Cars.carroSupSport.velMax = Math.floor(Math.random() * 20) + 210;
    Cars.carroSupSport.velMin = Math.floor(Math.random() * 20) + 140;
    Cars.carroSupSport.derrapagem = Math.round(((Math.random()+ Number.EPSILON) * 75) + 100)/ 10000; //retorna um número entre 0.01 e 0.0175

    if (sort <= 33) {
      return Cars.carroPopular;
    } else if (sort > 33 && sort <= 66) {
      return Cars.carroSport;
    } else {
      return Cars.carroSupSport;
    }
}

function lvlUp(char){
    if(char.exp>=450 & char.lvl<10){
        char.exp -= 450;
        char.lvl++
    }else if (char.lvl==10 ){
        char.exp = 450;
        char.lvl = 10
    }
} 

function iniciarCorrida() 
{
    var sorteioPedro = sorteioCarro();
    var sorteioJuca = sorteioCarro();
    var sorteioEdna = sorteioCarro();

    document.getElementById('jogador-um').innerHTML = "Pedro sorteou o " + sorteioPedro.name;
    document.getElementById('jogador-dois').innerHTML = "Juca sorteou o " + sorteioJuca.name;
    document.getElementById('jogador-tres').innerHTML = "Edna sorteou o " + sorteioEdna.name;

    var pedroVMin = sorteioPedro.velMin;
    var pedroVMax = sorteioPedro.velMax;
    var pedroDerrapagem = sorteioPedro.derrapagem; 
    var jucaVMin = sorteioJuca.velMin;
    var jucaVMax = sorteioJuca.velMax;
    var jucaDerrapagem = sorteioJuca.derrapagem;
    var ednaVMin = sorteioEdna.velMin;
    var ednaVMax = sorteioEdna.velMax;
    var ednaDerrapagem = sorteioEdna.derrapagem;

    const corridaTipo = document.querySelector('input[name="corrida"]:checked').value;

    var contPedro = 0;
    var contJuca = 0;
    var contEdna = 0;

    //Escolher Corrida
    if (corridaTipo === 'rapida') {
        var corrida = 10;
        var primeiro = 200;
        var segundo = 120;
        var terceiro = 50;
    } else if (corridaTipo === 'grande') {
        var corrida = 70;
        var primeiro = 220;
        var segundo = 130;
        var terceiro = 75;
    } else if (corridaTipo === 'enduro') {
        var corrida = 160;
        var primeiro = 250;
        var segundo = 150;
        var terceiro = 90;
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
        players[0].exp += primeiro;
        document.getElementById('ganhador').innerHTML = "O vencedor é o Pedro com " + contPedro + " voltas em primeiro lugar";
        if (contJuca > contEdna) {
            players[1].exp += segundo;
            players[2].exp += terceiro;
        } else {
            players[2].exp += segundo;
            players[1].exp += terceiro;
        }
    } else if (contJuca > contPedro && contJuca > contEdna) {
        players[1].exp += primeiro;
        document.getElementById('ganhador').innerHTML = "O vencedor é o Juca com " + contJuca + " voltas em primeiro lugar";
        if (contPedro > contEdna) {
            players[0].exp += segundo;
            players[2].exp += terceiro;
        } else {
            players[2].exp += segundo;
            players[0].exp += terceiro;
        }
    } else if (contEdna > contPedro && contEdna > contJuca) {
        players[2].exp += primeiro;
        document.getElementById('ganhador').innerHTML = "O vencedor é o Edna com " + contEdna + " voltas em primeiro lugar";
        if (contPedro > contJuca) {
            players[0].exp += segundo;
            players[1].exp += terceiro;
        } else {
            players[1].exp += segundo;
            players[0].exp += terceiro;
        }
    } else {
        alert('Empate!');
    }

    players.forEach(lvlUp);

    document.getElementById('jogador-um-xp').innerHTML = "Pamonha";
    document.getElementById('jogador-dois-xp').innerHTML = "Juca está no nível" + players[1].lvl + " com " + players[1].exp + " de experiência, faltam " + (450 - players[1].exp) + " para o próximo nível!";
    document.getElementById('jogador-tres-xp').innerHTML = "Edna está no nível" + players[2].lvl + " com " + players[2].exp + " de experiência, faltam " + (450 - players[2].exp) + " para o próximo nível!";
}


