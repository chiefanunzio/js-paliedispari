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
  var rnd = Math.floor(Math.random() * maxRnd) + minRnd;

  return rnd;
}
// function pariDispari(value){
//   if(value % 2 == 1){
//     return true;               prova funzione
//   }else{
//     return false;
//   }
//
// }

var req = prompt('pari o dispari ?');//requisiti per la vittoria
var numUtente = parseInt(prompt('dimmi un numero da 1 a 5'));//numero del player
var numIa = rndNumber(1, 5);//numero generato dal pc
var res = numUtente + numIa;//risultato della somma





// var risultato = pariDispari(res);
// if(risultato = true){
//   if(req === 'pari'){
//     console.log('hai vinto con il pari');
//   }else{
//     console.log('ha vinto il pc con il pari');  prova nuova funzione
//   }
// }else{
//   if(req === 'dispari'){
//     console.log('hai vinto con il dispari');
//   }else{
//     console.log('ha vinto il pc con il dispari');
//   }
// }


if(res % 2 == 0){            //if sul risultato di pari
  if(req === 'pari'){
    console.log(' con il numero ' + numUtente + ' hai vinto con il pari' + ' con il risultato di ' + res);
  }else{
    console.log(' con il numero ' + numIa + ' ha vinto il pc con il pari' + ' con il risultato di ' + res);
  }
}else{                     //if sul risultato dispari
  if(req === 'dispari'){
    console.log(' con il numero ' + numUtente + ' hai vinto con il dispari' + ' con il risultato di ' + res);
  }else{
    console.log(' con il numero ' + numIa + ' ha vinto il pc con il dispari' + ' con il risultato di ' + res);
  }

}
