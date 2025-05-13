
//ALTERNATIVA 1, simplificado sem função
const nomeDog = "Princesa"
let peso = 10
let qtdeRacaoDia, qtdDiaEstoqueDura
let estoqueAtualGrama = 5000


qtdeRacaoDia = peso * 30
qtdDiaEstoqueDura = estoqueAtualGrama / qtdeRacaoDia

// console.log("Nome do seu' doguinho :", nomeDog)
// console.log("Peso em kg :", peso)
// console.log("Quantidade de ração por dia :", qtdeRacaoDia , "gramas")
// console.log("Quandidade de dias que vai durar a ração :", Math.floor(qtdDiaEstoqueDura), "dias\n")

// OU

console.log(`Nome do seu seu doguinho: ${nomeDog}`)
console.log(`Peso em kg : ${peso}`)
console.log(`Quantidade de ração por dia : ${qtdeRacaoDia} gramas`)
console.log(`Quandidade de dias que vai durar a ração : ${Math.floor(qtdDiaEstoqueDura)} dias\n`)



//ALTERNATIVA 2 , usando função com parâemtros

function calcularQtdeConsumoDeRacao(nome, peso, estoqueAtualGrama) {
    qtdeRacaoDia = peso * 20
    qtdDiaEstoqueDura = estoqueAtualGrama / qtdeRacaoDia

    console.log("----------------------------")
    console.log(`Nome do seu seu doguinho: ${nome}`)
    console.log(`Peso em kg : ${peso}`)
    console.log(`Quantidade de ração por dia : ${qtdeRacaoDia} gramas`)
    console.log(`Quandidade de dias que vai durar a ração : ${Math.floor(qtdDiaEstoqueDura)} dias\n`)
    console.log("----------------------------")
}


calcularQtdeConsumoDeRacao('Ada',1,2000)
calcularQtdeConsumoDeRacao('Au Au',15.5,15000)





