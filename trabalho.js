




function geradorDeTagsDeIdentificacao(nome) {

    return nome.toUpperCase()
}

function verificarSePodeSerAdotado(idade, porte) {
    const adocao = idade == 1 && porte === 'M' ? true : false
    return adocao
}



function calcularConsumoDeRacao(nome, idade, peso) {

    const qtdeRacaoDia = peso * 300
    return qtdeRacaoDia
}


function decidirTipoDeAtividadePorPorte(porte) {

    let msg = 'Ops, não pode brincar dentro de casa.'

    if (porte == 'pequeno') {
        msg = 'brincar dentro de casa'
    }

    return msg
}



async function buscarDadoAsync() {
    
    const dado = 'Pipoca'
    return dado

}

export {
    geradorDeTagsDeIdentificacao,
    verificarSePodeSerAdotado,
    calcularConsumoDeRacao,
    decidirTipoDeAtividadePorPorte,
    buscarDadoAsync
}