/*
Controle de petiscos
Crie um script que receba uma quantidade de petiscos e de 1 por vez até que o dog esteja satisfeito

Use a estrutura de repetição for contado

Exiba:
    - cada vez que um petisco for entregue
    - Quando o dog estiver satisfeito (que é quando terminar os petiscos)

    Extra: transforme a lógica em uma função (da forma que conseguir)
*/

// ----------- Exemplo 1 ---------
console.log('----------- Exemplo 1 ---------')
function retornaQuandoDogEstaSatisfeito(qtde) {

    let qtdePetiscos = qtde

    for (let qtdeEntregue = 1; qtdeEntregue <= qtdePetiscos; qtdeEntregue++) {

        if (qtdeEntregue != qtdePetiscos) {
            console.log(`Petisco ${qtdeEntregue} entregue, mas o doguinho não está satisfeito! :( )`)
        }
        else {
            console.log(`Doguinho satisfeito :) `)
        }
    }
}

retornaQuandoDogEstaSatisfeito(5)

// ----------- Exemplo 2 ---------
console.log('----------- Exemplo 2 ---------')
const quantidadePetiscosDisponiveis = 4

for (let petisco = 1; petisco < quantidadePetiscosDisponiveis; petisco++) {
    console.log(`Dadno o petisco de nº ${petisco} para o Totó `)
}
console.log(`Satisfeito, chega de petiscos por hoje! `)


// ----------- Exemplo 3 ---------
console.log('----------- Exemplo 3 ---------')
const alimentaDog = (quantidadePetiscosDog) => {
    for (let petisco = 1; petisco <= quantidadePetiscosDog; petisco++) {
        console.log(petisco < quantidadePetiscosDog ? `Ganhei ${petisco}. Quero mais ` : `Agora estou satisfeito`)
    }
}

alimentaDog(5)
