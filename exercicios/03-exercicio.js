


let idade = 3, idadeMinima = 2
const nome = "Princesa", porte = 'g'


console.log(`Seu dog ${verificaSePodeSerAdotado(idade, porte)} ser adotado`)


function verificaSePodeSerAdotado(idade, porte) {
    const adocao = idade >= idadeMinima || porte === 'P' ? "Pode" : "Não pode"
    return adocao
}



