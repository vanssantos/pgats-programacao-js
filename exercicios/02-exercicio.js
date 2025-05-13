
/**
 * Validador de nomes para as tags
 * Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script 
 * para limpar e padronizar os nomes
 * 
 * Aplique as formatações e exiba:
 * O nome original, como foi cadastrado
 * O nome formatado
 * 
 * Extra: Aplique uma regra que confira se o nome informado possui apenas uma palavra.  
 * Exiba se o nome é válido ou não.
 * 
 */


//variavéis
const nomeOriginal = "PrinCes@s  Dias"
let nomeFormatado, tamanhoPalavra


//formatando o nome
nomeFormatado = removerCaracteresEspeciais(nomeOriginal)
nomeFormatado =  deixaPrimeiraLetraMaiuscula(nomeFormatado)

//exibindo o nome original e formatado
console.log("Formata nome do Doguinho: \n")
console.log("Nome original do Dog: ", nomeOriginal)
console.log("Nome do dog formatado: ", nomeFormatado, "\n")


//verifica se o nome tem mais de uma palavra e exibe msg conforme texto
if (retornaQtdeDePalavrasDoTexto(nomeFormatado).length > 1) {
    console.log("Palavra inválida. Nome contém mais de uma palavra")
}
else {
    console.log("Nome válido. Nome do seu doguinho não tem mais de uma palavra \n") 
}


//função que remove caracteres especiais
function removerCaracteresEspeciais(texto) {
    return texto.replace(/[^a-zA-Z0-9À-ÿ\s]/g, '');
}


//função que remove espaços
function deixaPrimeiraLetraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase()
}


//verifica quantidade de palavras do texto
function retornaQtdeDePalavrasDoTexto(nome){
    return nome.trim().split(/\s+/)
}