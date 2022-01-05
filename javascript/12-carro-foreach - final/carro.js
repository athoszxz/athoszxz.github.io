const Cars = {
  "carroPopular": {
      "velMax": {"min": 180, "max": 200}, 
      "velMin": {"min": 110, "max": 130}, 
      "derrapagem": {"min": 0.03, "max": 0.04},
      "nome": "Carro Popular"
    },
    "carroSport": {
      "velMax": {"min": 195, "max": 215}, 
      "velMin": {"min": 125, "max": 145}, 
      "derrapagem": {"min": 0.02, "max": 0.03},
      "nome": "Carro Sport"
    },
    "carroSupSport": {
      "velMax": {"min": 210, "max": 230}, 
      "velMin": {"min": 140, "max": 160}, 
      "derrapagem": {"min": 0.01, "max": 0.0175},
      "nome": "Carro SupSport"
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

function velFinalCarro(car){
    let sortMaxVel = Math.floor(Math.random() * (car.velMax.max - car.velMax.min + 1)) + car.velMax.min;
    let sortMinVel = Math.floor(Math.random() * (car.velMin.max - car.velMin.min + 1)) + car.velMin.min;
    let sortDerrapagem = (Math.floor(Math.random() * ((car.derrapagem.max * 100) - (car.derrapagem.min * 100) + 1)) + (car.derrapagem.min * 100)) / 100;
    let sortVel = (Math.floor(Math.random() * (sortMaxVel - sortMinVel + 1)) + sortMinVel);
    let derrapagem = (Math.floor(Math.random() * (sortMaxVel - sortMinVel + 1)) + sortMinVel) * sortDerrapagem;
    let vel = sortVel - derrapagem;
    return Math.floor(vel);
}

function sortearCarro(){
    let randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber >= 0 && randomNumber <= 59){
        return Cars.carroPopular;
    }else if(randomNumber >= 60 && randomNumber <= 94){
        return Cars.carroSport;
    }else if(randomNumber >= 95 && randomNumber <= 100){
        return Cars.carroSupSport;
    }
}

function iniciar(){
    let tipoCorrida = document.querySelector( 'input[name="tipo-corrida"]:checked').value;   
    let i = 0;
    let pontoPrimeiro, pontoSegundo, pontoTerceiro;
    pontoPrimeiro = pontoSegundo = pontoTerceiro = 0;
    let vitoriasPedro, vitoriasJuca, vitoriasEdna;
    vitoriasPedro = vitoriasJuca = vitoriasEdna = 0;
    let carroPedro = sortearCarro();
    let carroJuca = sortearCarro();
    let carroEdna = sortearCarro();
    let velPedro, velJuca, velEdna;
    velPedro = velJuca = velEdna = 0;

    if (tipoCorrida == 10){
        pontoPrimeiro = 200;
        pontoSegundo = 120;
        pontoTerceiro = 50;
    }else if (tipoCorrida == 70){
        pontoPrimeiro = 220;
        pontoSegundo = 130;
        pontoTerceiro = 75;
    }else if (tipoCorrida == 160){
        pontoPrimeiro = 250;
        pontoSegundo = 150;
        pontoTerceiro = 90;
    }

    while (i < tipoCorrida) {
        velPedro = velFinalCarro(carroPedro);
        velJuca = velFinalCarro(carroJuca);
        velEdna = velFinalCarro(carroEdna);
        if(velPedro > velJuca && velPedro > velEdna){
            vitoriasPedro++;
            players[0].exp += pontoPrimeiro;
            if(players[0].exp >= 450){
                players[0].lvl++;
                players[0].exp = 0;
            }
            if(velJuca > velEdna){
                vitoriasJuca++;
                players[1].exp += pontoSegundo;
                if(players[1].exp >= 450){
                    players[1].lvl++;
                    players[1].exp = 0;
                }
            }else{
                vitoriasEdna++;
                players[2].exp += pontoTerceiro;
                if(players[2].exp >= 450){
                    players[2].lvl++;
                    players[2].exp = 0;
                }
            }
        }else if(velJuca > velPedro && velJuca > velEdna){
            vitoriasJuca++;
            players[1].exp += pontoPrimeiro;
            if(players[1].exp >= 450){
                players[1].lvl++;
                players[1].exp = 0;
            }
            if(velPedro > velEdna){
                vitoriasPedro++;
                players[0].exp += pontoSegundo;
                if(players[0].exp >= 450){
                    players[0].lvl++;
                    players[0].exp = 0;
                }
            }else{
                vitoriasEdna++;
                players[2].exp += pontoTerceiro;
                if(players[2].exp >= 450){
                    players[2].lvl++;
                    players[2].exp = 0;
                }
            }
        }else if(velEdna > velPedro && velEdna > velJuca){
            vitoriasEdna++;
            players[2].exp += pontoPrimeiro;
            if(players[2].exp >= 450){
                players[2].lvl++;
                players[2].exp = 0;
            }
            if(velPedro > velJuca){
                vitoriasPedro++;
                players[0].exp += pontoSegundo;
                if(players[0].exp >= 450){
                    players[0].lvl++;
                    players[0].exp = 0;
                }
            }
        }else{
            vitoriasPedro++;
            players[0].exp += pontoPrimeiro;
            if(players[0].exp >= 450){
                players[0].lvl++;
                players[0].exp = 0;
            }
            if(velJuca > velEdna){
                vitoriasJuca++;
                players[1].exp += pontoSegundo;
                if(players[1].exp >= 450){
                    players[1].lvl++;
                    players[1].exp = 0;
                }
            }else{
                vitoriasEdna++;
                players[2].exp += pontoTerceiro;
                if(players[2].exp >= 450){
                    players[2].lvl++;
                    players[2].exp = 0;
                }
            }
        }
        i++;
    }
    if (vitoriasPedro > vitoriasJuca && vitoriasPedro > vitoriasEdna) {
        document.getElementById("ganhador").innerHTML = `O jogador Pedro ganhou ${vitoriasPedro} vezes!`;
    }else if(vitoriasJuca > vitoriasPedro && vitoriasJuca > vitoriasEdna){
        document.getElementById("ganhador").innerHTML = `O jogador Juca ganhou ${vitoriasJuca} vezes!`;
    }else if(vitoriasEdna > vitoriasPedro && vitoriasEdna > vitoriasJuca){
        document.getElementById("ganhador").innerHTML = `O jogador Edna ganhou ${vitoriasEdna} vezes!`;
    }else{
        document.getElementById("ganhador").innerHTML = `Os jogadores empataram!`;
    }
    document.getElementById("jogador-um").innerHTML = `O carro sorteado para Pedro é o ${carroPedro.nome}.`;
    document.getElementById("jogador-dois").innerHTML = `O carro sorteado para Juca é o ${carroJuca.nome}.`;
    document.getElementById("jogador-tres").innerHTML = `O carro sorteado para Edna é o ${carroEdna.nome}.`;

    document.getElementById("jogador-um-xp").innerHTML = `Pedro terminou no level ${players[0].lvl}.`;
    document.getElementById("jogador-dois-xp").innerHTML = `Juca terminou no level ${players[1].lvl}.`;
    document.getElementById("jogador-tres-xp").innerHTML = `Edna terminou no level ${players[2].lvl}.`;

    players.forEach(player => {
        player.lvl = 0;
    });
}
