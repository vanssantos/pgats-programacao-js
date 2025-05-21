
/*
    é uma estrutura de repetição, na qual temos controle da quantidade de vezes que será executado
    ex:
        para, faca
            contador; condição; manipulação do contador (incremento/decremento)

            quantidadeDePetiscos; quantidadeDePetiscos < = quantidadeCalculada; quantidadeDePesticos++
*/

//Exemplo 1:
console.log('---------- Exemplo 1: -----------' )
const quantidadeCalculada = 3
for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {
    // ação de dar um petisco

    console.log(`Dando o petisco de número: ${quantidadeDePetiscos}`)
}


//Exemplo 2:
console.log('---------- Exemplo 2: -----------' )
const gatos = ['Lessie', 'Pony', 'Fumaca']

for (let indice = 0; indice < gatos.length; indice++) {
    console.log(`Dando o petisco para: ${gatos[indice]}`)
}


//Exemplo 3:
console.log('---------- Exemplo 3: -----------' )
const quantidadeCalculada2 = 3
for (let quantidadeDePetiscos = 1; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++) {

    for (let indice = 0; indice < gatos.length; indice++) {
        console.log(`Dando o petisco para: ${gatos[indice]}`)
    }

    console.log(`Dando o petisco de número: ${quantidadeDePetiscos}`)
}

