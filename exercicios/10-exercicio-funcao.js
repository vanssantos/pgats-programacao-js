/*

Distribuidor de petiscos

Você tem uma lista de cães: Pantera, Luna e Thor
Crie um script que "entregue" 1 petisco para cada cão da lista.
Exibea uma mensagem como: "Entregando petisco para Pantera"
*/




function entregarPetiscos(listaDeDogs) {
    listaDeDogs.forEach(item => {
        console.log(`Entregando petisco para ${item} `)
    })
}


export{
    entregarPetiscos
}


