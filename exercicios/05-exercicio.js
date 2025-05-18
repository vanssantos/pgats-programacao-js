
/*

Classificador de porte automático

Crie um script que classifque o port com base no peso de forma simplificada, sendo:

- até 10 kg -> pequeno, acima disso >- medio

use o operador ternário para determinar o porte. Exiba:

- nome
- pseo
- porte classificado

Extra: transforme lógica em um função (da forma que conseguir)
*/



const nomeDog = "Princess"
const peso = 5.5

const porte = peso <= 10 ? 'pesquno' : 'médio'

console.log("--------------------")
console.log(`Nome do dog: ${nomeDog}`)
console.log(`Peso do dog: ${peso}`)
console.log(`Porte do dog: ${porte}`)
console.log("--------------------")





// Alternativa com a função (Extra)

retornaPorteClassificacao('Ada', 6)
retornaPorteClassificacao('NewDog', 11)

function retornaPorteClassificacao(nomeDog, peso) {
   const porte = peso <= 10 ? 'pesqueno' : 'médio'

    console.log("--------------------")
    console.log(`Nome do dog: ${nomeDog}`)
    console.log(`Peso do dog: ${peso}`)
    console.log(`Porte do dog: ${porte}`)
    console.log("--------------------")
}

