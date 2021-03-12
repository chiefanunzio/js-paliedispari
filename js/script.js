
function parolaPalind(val){

  return val.split("").reverse().join("");

}
var parola = prompt('dimmi una parola');
var res = parolaPalind(parola);
console.log(res);
