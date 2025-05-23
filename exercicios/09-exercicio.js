
/*
Entregador de brinquedos para os dogs

Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
Crie um script que passe pela lista de brinquedos e entregue um por vez
Exiba o nome de cada brinquedo que for entregue

Use a estrutura de repetição forEach

Extra: transforme a lógica em uma função (da forma que conseguir)

*/


// ----------- Exemplo 1 -----------
console.log(`----------- Exemplo 1 -----------`)

function exibeListaDeBrinquedos() {
    const listaBrinquedos = ['Bola', 'Osso', 'Corda', 'Sino']

    listaBrinquedos.forEach(item => {
        console.log(`O brinque ${item} foi entregue! :) uhuuu `)
    })
    console.log(`Todos os brinquedos foram entregues !!! `)
}

exibeListaDeBrinquedos()


// ----------- Exemplo 2 -----------
console.log(`----------- Exemplo 2 -----------`)
const brinquedosComNomeECor = [
    {
        nome: 'Bola',
        cor: 'azul'
    },
    {
        nome: 'Osso',
        cor: 'branco'
    },
    {
        nome: 'Corda',
        cor: 'rosa'
    },
    {
        nome: 'Sino',
        cor: 'verde'
    }
]

brinquedosComNomeECor.forEach(item => {
    console.log(`Brinquedo ${item.nome} na cor ${item.cor} foi entregue !!`)
});
