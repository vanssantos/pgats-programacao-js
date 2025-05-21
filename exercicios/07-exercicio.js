
/*
Contador de safisfação de passeio

Crie um script que avise quando o Dog já passeou o suficiente.
Para saber, vamos considerar que ele se sentirá 
satisfeito somente a partir de 5 voltas na quadra

Use a estrutura de repatição while


Exiba:
Qual o número de volta atual
Quando o dog estiver satisfeito

*/

console.log("---------  Exemplo 1 ---------")
const qtdeDeVoltasSatisfeito = 5
let volta = 1

while (volta <= qtdeDeVoltasSatisfeito) {
    console.log(`Volta de número ${volta} com o Pitoco`)

    volta++
}

console.log(`Acabou o passeio Pitoco`)


console.log("------------------ \n")

console.log("---------  Exemplo 2 - com função ---------")

function verificarSeEstaSatisfeito() {

    const qtdeDeVoltasSatisfeito = 5
    let volta = 1

    while (volta <= qtdeDeVoltasSatisfeito) {
        console.log(`Volta de número ${volta} com o Pitoco`)

        volta++
    }

    console.log(`Acabou o passeio Pitoco`)
}


verificarSeEstaSatisfeito()

