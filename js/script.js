// // ex 1
// function parolaPalind(val){
//
//   return val.split("").reverse().join("");
//   // divido i caratteri, li inverto e li riunisco
// }
// var parola = prompt('dimmi una parola');
// var res = parolaPalind(parola);
// // richiamo la funzione
// if (parola == res){
//   console.log('la parola é palindroma');
// }else{
//   console.log('ritenta');
// }
// // valuto se sono uguali


function rndNumber(min, max) {
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var rnd = Math.floor(Math.random() * 5) + 1;

  return rnd;
}

var req = prompt('pari o dispari ?');//requisiti per la vittoria
var numUtente = parseInt(prompt('dimmi un numero'));//numero del player
var numIa = rndNumber();//numero generato dal pc

var res = numUtente + numIa;
if(res % 2 == 0){
  if(req == 'pari'){
    console.log('hai vinto con il pari');
  }else{
    console.log('ha vinto il pc con il pari');
  }
}else{
  if(req == 'dispari'){
    console.log('hai vinto con il dispari');
  }else{
    console.log('ha vinto il pc con il dispari');
  }

}
