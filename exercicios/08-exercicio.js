/*
Controle de petiscos
Crie um script que receba uma quantidade de petiscos e de 1 por vez até que o dog esteja satisfeito

Use a estrutura de repetição for contado

Exiba:
    - cada vez que um petisco for entregue
    - Quando o dog estiver satisfeito (que é quando terminar os petiscos)

    Extra: transforme a lógica em uma função (da forma que conseguir)
*/



let qtdePetiscos = 5

for (let voltas = 0; voltas <= qtdePetiscos; voltas++) {
    
    if(voltas != qtdePetiscos){
        console.log(`Petisco entregue, mas o doguinho não está satisfeito! :( )`)        
    }
    else {
        console.log(`Doguinho satisfeito :) `)
    }    
}



