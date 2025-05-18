
/** 
 * 
 * condicao (se veradeira)
 *  acao dentro do if
 * senao se (outr condicao)
 *  acao dentro do if
 * senao
 * acao dentro do else

*/

if (10 < 5) {
    console.log("Valor é maior")
} else {
    console.log("Valor é menor")
}


const idade = 2
const porte = "P"

if (idade >= 2){
    console.log("pode se adotado - passou pela validação da idade")
} else if (porte == "P"){
    console.log("pode ser adotado - passou pela validação do porte")
} else {
    console.log("não pode ser adotado")
}



