
let porte = 'médio'
let tempo = 30
let atividade, atividadeTempo



console.log("-----------")
console.log("Atividade do seu doguinho pelo tempo disponível: ")



switch (porte) {
    case 'pequeno':
        atividade = 'brincar dentro de casa'
        break;
    case 'médio':
        atividade = 'caminhada no quarteirão'
        break;
    case 'grande':
        atividade = 'correr no parque'
    default:
        atividade = 'porte inválido'
        break;
}


if (tempo < 15) {
    atividadeTempo = `atividade rápida `
} else if (tempo <= 30) {
    atividadeTempo = `tempo ideal `
} else if (tempo > 30) {
    atividadeTempo = `hora da diversão `
}


console.log(`${atividadeTempo} : [ ${atividade}]`)

