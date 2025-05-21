/*
    é o mais utilizado. é usado para lista de dados .. é equivalente para ... cada

    ListaDeAlunos:
    
    Matheus
    Renata
    Leandro
    Ana
    Lucas

    paraCada (item da ) listaDeAlunos
        // dar uma nota aleatória

*/

// Exemplo 1 - foreach normal , com uma lista
console.log('-------- Exemplo 1 ------- ')
const listaDeAlunos = ['Vanessa', 'Ana', 'Gustavo']

listaDeAlunos.forEach(item => {
    console.log(item)
})


// Exemplo 2 - utilizando objeto de dados
console.log('-------- Exemplo 2 ------- ')
const listadeAlunosENotas = [
    {
        nome: 'Matheus',
        nota: 9
    },
    {
        nome: 'Vanessa',
        nota: 10
    }
]

listadeAlunosENotas.forEach(item => {
    console.log(`O aluno ${item.nome} tem a nota ${item.nota}`)
})


// Exemplo 3 - realizando condição de verificação dentro do foreach
console.log('-------- Exemplo 3 ------- ')
const listadeAlunosENotasDois = [
    {
        nome: 'Fernanda',
        nota: 5
    },
    {
        nome: 'Vansss',
        nota: 10
    }
]

//  Para dicionar um nome item na lista, utiliza o push
listadeAlunosENotasDois.push({
    nome: 'José',
    nota: 8
})


listadeAlunosENotasDois.forEach(item => {
    if (item.nota <= 5) {
        console.log(`Aluno ${item.nome} está com nota vermelha ${item.nota}`)
    }
    else {
        console.log(`Aluno ${item.nome} está com nota azul ${item.nota}`)
    }
})


