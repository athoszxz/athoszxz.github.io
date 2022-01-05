const Cars = {
  "carroPopular": {
      "velMax": {"min": 180, "max": 200}, 
      "velMin": {"min": 110, "max": 130}, 
      "derrapagem": {"min": 0.03, "max": 0.04}
    },
    "carroSport": {
      "velMax": {"min": 195, "max": 215}, 
      "velMin": {"min": 125, "max": 145}, 
      "derrapagem": {"min": 0.02, "max": 0.03}
    },
    "carroSupSport": {
      "velMax": {"min": 210, "max": 230}, 
      "velMin": {"min": 140, "max": 160}, 
      "derrapagem": {"min": 0.01, "max": 0.0175}
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
function iniciar() {
  let voltas = document.querySelector('input[name="tipo-corrida"]:checked').value; 
  let primeiroPonto, segundoPonto, terceiroPonto;
  primeiroPonto = segundoPonto = terceiroPonto = 0;
  if (voltas == 10){
      primeiroPonto = 200;
      segundoPonto = 120;
      terceiroPonto = 50;
  }
  if (voltas == 70){
      primeiroPonto = 220;
      segundoPonto = 130;
      terceiroPonto = 75;
  }
  if (voltas == 160){
      primeiroPonto = 250;
      segundoPonto = 150;
      terceiroPonto = 90;
  }
  
  let carOneChance = Math.random();
  let carTwoChance = Math.random();
  let carThreeChance = Math.random();
  let winLapsOne = 0;
  let winLapsTwo = 0;
  let winLapsThree = 0;
  class Car{
      constructor(minSpeed, maxSpeed, sliping, color, ownerName){
          this.minSpeed= minSpeed;
          this.maxSpeed= maxSpeed;
          this.sliping= sliping;
          this.color= color;
          this.ownerName = ownerName;
      }
  }
  function setCar(carChance,carColor,ownerNameSet,playerLvl){
      let maxSpeedSet =0;
      let minSpeedSet = 0;
      let slipingSet = 0;
      if (carChance<=0.6){
          maxSpeedSet = Math.random() * (Cars.carroPopular.velMax.max - Cars.carroPopular.velMax.min) + Cars.carroPopular.velMax.min;
          minSpeedSet = Math.random() * (Cars.carroPopular.velMin.max - Cars.carroPopular.velMin.min) + Cars.carroPopular.velMin.min;
          slipingSet = Math.random() * (Cars.carroPopular.derrapagem.max - Cars.carroPopular.derrapagem.min) + Cars.carroPopular.derrapagem.min;
          maxSpeedSet = maxSpeedSet + maxSpeedSet*playerLvl*0.01;
          minSpeedSet = minSpeedSet + minSpeedSet*playerLvl*0.01;
      }
      if (carChance>0.6 & carChance<0.95){
          maxSpeedSet = Math.random() * (Cars.carroSport.velMax.max - Cars.carroSport.velMax.min) + Cars.carroSport.velMax.min;
          minSpeedSet = Math.random() * (Cars.carroSport.velMin.max - Cars.carroSport.velMin.min) + Cars.carroSport.velMin.min;
          slipingSet = Math.random() * (Cars.carroSport.derrapagem.max - Cars.carroSport.derrapagem.min) + Cars.carroSport.derrapagem.min;
          maxSpeedSet = maxSpeedSet + maxSpeedSet*playerLvl*0.01;
          minSpeedSet = minSpeedSet + minSpeedSet*playerLvl*0.01;
      }
      if (carChance>=0.95){
          maxSpeedSet = Math.random() * (Cars.carroSupSport.velMax.max - Cars.carroSupSport.velMax.min) + Cars.carroSupSport.velMax.min;
          minSpeedSet = Math.random() * (Cars.carroSupSport.velMin.max - Cars.carroSupSport.velMin.min) + Cars.carroSupSport.velMin.min;
          slipingSet = Math.random() * (Cars.carroSupSport.derrapagem.max - Cars.carroSupSport.derrapagem.min) + Cars.carroSupSport.derrapagem.min;
          maxSpeedSet = maxSpeedSet + maxSpeedSet*playerLvl*0.01;
          minSpeedSet = minSpeedSet + minSpeedSet*playerLvl*0.01;
      }
      let theCar = new Car(minSpeedSet,maxSpeedSet,slipingSet,carColor,ownerNameSet);
      return theCar;
  }
  
  let carOne = setCar(carOneChance,'blue','Pedro',players[0].lvl);
  let carTwo = setCar(carTwoChance,'red','Juca',players[1].lvl);
  let carThree = setCar(carThreeChance,'pink','Edna',players[2].lvl);
  
  for(let i = 0;i<voltas;i++){
      let carOneSpeed = Math.random() * (carOne.maxSpeed - carOne.minSpeed) + carOne.minSpeed;
      let carTwoSpeed = Math.random() * (carTwo.maxSpeed - carTwo.minSpeed) + carTwo.minSpeed;
      let carThreeSpeed = Math.random() * (carThree.maxSpeed - carThree.minSpeed) + carThree.minSpeed;
      carOneSpeed = carOneSpeed - carOneSpeed * carOne.sliping;
      carTwoSpeed = carTwoSpeed - carTwoSpeed * carTwo.sliping;
      carThreeSpeed = carThreeSpeed - carThreeSpeed * carThree.sliping;
      if(carOneSpeed>carThreeSpeed & carOneSpeed>carTwoSpeed){
          winLapsOne++;
      }
      if(carTwoSpeed>carThreeSpeed & carTwoSpeed>carOneSpeed){
         winLapsTwo++;
      }
      if(carThreeSpeed>carOneSpeed & carThreeSpeed>carTwoSpeed){
         winLapsThree++;
      }
  }
  while(winLapsOne == winLapsThree || winLapsOne == winLapsTwo || winLapsTwo == winLapsThree ){
      let carOneSpeed = Math.random() * (carOne.maxSpeed - carOne.minSpeed) + carOne.minSpeed;
      let carTwoSpeed = Math.random() * (carTwo.maxSpeed - carTwo.minSpeed) + carTwo.minSpeed;
      let carThreeSpeed = Math.random() * (carThree.maxSpeed - carThree.minSpeed) + carThree.minSpeed;
      carOneSpeed = carOneSpeed - carOneSpeed * carOne.sliping;
      carTwoSpeed = carTwoSpeed - carTwoSpeed * carTwo.sliping;
      carThreeSpeed = carThreeSpeed - carThreeSpeed * carThree.sliping;
      if(carOneSpeed>carThreeSpeed & carOneSpeed>carTwoSpeed){
          winLapsOne++;
      }
      if(carTwoSpeed>carThreeSpeed & carTwoSpeed>carOneSpeed){
         winLapsTwo++;
      }
      if(carThreeSpeed>carOneSpeed & carThreeSpeed>carTwoSpeed){
         winLapsThree++;
      }
  }
  
  if(winLapsOne>winLapsThree & winLapsOne>winLapsTwo){
      document.getElementById('ganhador').innerHTML = "O vencedor é o " + carOne.ownerName+" com "+winLapsOne+" voltas em primeiro lugar";
      players[0].exp+= primeiroPonto;
      if(winLapsTwo>winLapsThree){
          players[1].exp+= segundoPonto;
          players[2].exp+= terceiroPonto;
      }else{
          players[2].exp+= segundoPonto;
          players[1].exp+= terceiroPonto;
      }
  }
  if(winLapsTwo>winLapsThree & winLapsTwo>winLapsOne){
      document.getElementById('ganhador').innerHTML = "O vencedor é o " + carTwo.ownerName+" com "+winLapsTwo+" voltas em primeiro lugar";
      players[1].exp+= primeiroPonto;
      if(winLapsOne>winLapsThree){
          players[0].exp+= segundoPonto;
          players[2].exp+= terceiroPonto;
      }else{
          players[2].exp+= segundoPonto;
          players[0].exp+= terceiroPonto;
      }
  }
  if(winLapsThree>winLapsOne & winLapsThree>winLapsTwo){
      document.getElementById('ganhador').innerHTML = "O vencedor é o " + carThree.ownerName+" com "+winLapsThree+" voltas em primeiro lugar";
      players[2].exp+= primeiroPonto;
      if(winLapsTwo>winLapsOne){
          players[1].exp+= segundoPonto;
          players[0].exp+= terceiroPonto;
      }else{
          players[0].exp+= segundoPonto;
          players[1].exp+= terceiroPonto;
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
  players.forEach(lvlUp)
  
  document.getElementById('jogador-um-xp').innerHTML = carOne.ownerName + " está nível "+players[0].lvl+" com "+players[0].exp+" de experiencia, faltando "+ (450-players[0].exp)+" de experiencia para o próximo nível";
  document.getElementById('jogador-dois-xp').innerHTML = carTwo.ownerName + " está nível "+players[1].lvl+" com "+players[1].exp+" de experiencia, faltando "+ (450-players[1].exp)+" de experiencia para o próximo nível";
  document.getElementById('jogador-tres-xp').innerHTML = carThree.ownerName + " está nível "+players[2].lvl+" com "+players[2].exp+" de experiencia, faltando "+ (450-players[2].exp)+" de experiencia para o próximo nível";
  
  if (carOneChance<=0.6){
      document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro popular";
  }
  if (carOneChance>0.6 & carOneChance<0.95){
      document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro Sport";
  }
  if (carOneChance>=0.95){
      document.getElementById('jogador-um').innerHTML = carOne.ownerName + " sorteou o carro Super Sport";
  }
      
  if (carTwoChance<=0.6){
      document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro popular";
  }
  if (carTwoChance>0.6 & carTwoChance<0.95){
      document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro Sport";
  }
  if (carTwoChance>=0.95){
      document.getElementById('jogador-dois').innerHTML = carTwo.ownerName + " sorteou o carro Super Sport";
  }
      
  if (carThreeChance<=0.6){
      document.getElementById('jogador-tres').innerHTML = carThree.ownerName + " sorteou o carro popular";
  }
  if (carThreeChance>0.6 & carThreeChance<0.95){
      document.getElementById('jogador-tres').innerHTML = carThree.ownerName + " sorteou o carro Sport";
  }
  if (carThreeChance>=0.95){
      document.getElementById('jogador-tres').innerHTML = carThree.ownerName + " sorteou o carro Super Sport";
  }

}
