let counter = 15;
const texto = document.getElementById("chapeuzinho");

function zoom(n) {
  function plus() {counter += 1;}
  function down() {counter -= 1;}
  if (n==1){
  	plus();
  } else{
  	down();
  }
  texto.style.fontSize = counter + "px"; 
}






