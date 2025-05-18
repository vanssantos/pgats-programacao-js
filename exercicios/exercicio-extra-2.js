

const textoFornecido = "estudando javascript "


function retornarVogaisDoTexto (texto) {

    const textoSemEspcao =  texto.replace(/\s+/g,"")
    return qtdeVogais = [...textoSemEspcao].filter(item => "aeiou".includes(item)).length
}

console.log(retornarVogaisDoTexto(textoFornecido))