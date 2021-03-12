// ex 1
function parolaPalind(val){

  return val.split("").reverse().join("");
  // divido i caratteri, li inverto e li riunisco
}
var parola = prompt('dimmi una parola');
var res = parolaPalind(parola);
// richiamo la funzione
if (parola == res){
  console.log('la parola é palindroma');
}else{
  console.log('ritenta');
}
// valuto se sono uguali
