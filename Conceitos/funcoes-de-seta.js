
// sintaxe de função de seta /flecha

const nomeFuncao = () => {
}


// função nomeada, com parametros e sem retorno
const exibirNomeDodDog = (nome) => {
    console.log(nome)
}


//função nomeada, com parametro + valor default, sem retorno 
const exibirPorteDoDog = (porte = 'ND') => {
    console.log(porte)
}


// função nomeada, com parâmetro, com retorno
const obterNomeDoDogFormatado = (nome) => {
    return nome.toUpperCase()
}



//function com objeto 
const obterObjetoDog = () => {
    return {
        nome: 'Princesa',
        peso: 1.5
    }
}




//função com array

const comArray = () => {
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
const listarNomesDog = () => {
    return [
        'princes',
        'lindinha',
        'engracadinha'
    ]
}


//function com objeto com outtro objejto
const obterObjetoDogDois = () => {
    return {
        nome: 'Princesa',
        peso: 1.5,
        dogIrmao: {
            nome: 'Billy'
        },
        adotado: true
    }
}


// função de seta sem  {} com return automatico... isso é perimitido quando fica tudo em uma linha
const dobrar = (numero) => numero * 2

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