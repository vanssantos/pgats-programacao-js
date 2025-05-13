
/**
  && - E / and

  || - OU / OR

  ! - não / not

 */


//   && - E / and
// const nomeDog = "Pipocafser"
// const nomePossuiSoPalavras = nomeDog.split(" ").length ===1
// const nomePossuiAte10Caracteres = nomeDog.length <= 10


// console.log(nomePossuiSoPalavras && nomePossuiAte10Caracteres) //true




  // || - OU / OR
const dog = {
  adotado : true,
  peso: 5.3
}

console.log(true || true) //verdadeiro
console.log(true || false) // verdadeiro
console.log(false || true) // verdadeiro
console.log(false || false) // falso


console.log(!dog.adotado || (dog.peso < 10)) // verdadeiro