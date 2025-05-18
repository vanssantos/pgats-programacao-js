
// função nomeada, com parametros e sem retorno
function exibirNomeDodDog(nome) {
    console.log(nome)
}


//função nomeada, com parametro + valor default, sem retorno  
function exibirPorteDoDog(porte = 'ND') {
    console.log(porte)
}


// função nomeada, com parâmetro, com retorno
function obterNomeDoDogFormatado(nome) {
    return nome.toUpperCase()
}

//function com objeto 
function obterObjetoDog() {
    return {
        nome: 'Princesa',
        peso: 1.5
    }
}

//função com array
function comArray() {

    return [{
        nome: 'Vans',
        idade: 41
    },
    {
        nome: 'Bonne',
        idade: 28
    }
    ]
}

//função com lista
function listarNomesDog(){
    return [
        'princes',
        'lindinha',
        'engracadinha'
    ]
}


//function com objeto com outtro objejto
function obterObjetoDogDois() {
    return {
        nome: 'Princesa',
        peso: 1.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}

exibirNomeDodDog("princesa")
console.log(obterNomeDoDogFormatado("Irmão princesa"))
exibirPorteDoDog()
console.table(obterObjetoDog())
console.log(comArray())
console.table(comArray())
console.table(comArray()[0])
console.table(comArray()[1])
console.log(listarNomesDog())
console.table(listarNomesDog())
console.log(listarNomesDog()[0])

console.log(obterObjetoDogDois())
console.table(obterObjetoDogDois())