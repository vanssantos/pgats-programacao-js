
/*
    Sintaxe CommonJS:    modo mais antigo utilizado, mas ainda existem aplicações que utilizam
        module.exports = {} / require ('')

    EMS - Ecmascript Standard Modules
        export {}   --- utilizado para exportar algum módulo, ou seja, disponibilizar para outro lugar o módulo
        import      --- Utilizado para importar algum módulo, ou seja, utilizar alguma coisa no seu código

*/

function exibirNomePet(paramNomePet){
    console.log(`o nome do pet é: ${paramNomePet}`)    
}


// para que outro arquivo consiga acessar uma função, pode usar o export, passando a função.. para passar mais de uma, é so 
//colocar vírgula e informar a próxima função
export {
    exibirNomePet
}







