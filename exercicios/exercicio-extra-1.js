
const listaGeral = [9,"vans", 2, "Princess","Josi",6,7,"8"]


function retornarListaInteiros(lista){

    return  listaInteiros = listaGeral.filter(item => Number.isInteger(item))
}

console.log(retornarListaInteiros(listaGeral))
