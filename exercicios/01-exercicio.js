


const nome = "Princesa", raca = "vira-lata"
let idade = 15, peso = 32.500, adotado = true

let nameUpperCase = nome.toUpperCase()
let racaFirsLetter = raca.charAt(0).toUpperCase() + raca.slice(1).toLowerCase()


const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirsLetter
}]

console.log(animal)

console.table(animal)

console.log("------- Tag de identificação -------")
console.log("Nome do meu doguinho é: ", animal[0].nome)
console.log("Peso do meu doguinho é: ", animal[0].peso)
console.log("A Raça do meu doguinho é: ", animal[0].raca)
