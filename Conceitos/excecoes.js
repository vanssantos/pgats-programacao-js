/*

    try ... catch... finally
       tentar conexao com o BD (exmeplo)
       EX:

    tentar {
        //conexao com o BD
    } pegar (erro/excecao){
        //salvar a exceção em algum lugar ....
        // ou somente exibir
    } final{
        // é executado sempre, independente se deu erro ou nao 
    }
    

    código:
        try {
            
        } catch () {
            
        }  finally {
          
        }        
        
    Tem o trhow = lancar - serve para lançar um erro
*/


try {
    console.log("tentando alimentar o pet")
    // throw new Error('entrou na msg do ERROR');  // PROFESSOR COLOOU PARA FORÇAR O ERRO

} catch (excecao) {
    console.log(excecao) // EXIBE TODO O CONTEUDO DO ERRO, NOME E TEXTO
    //console.log(excecao.name) // EXIBE SOMENTE O NOME
    //console.log(excecao.message) // EXIBE SOMENTE A MENSAGEM
} finally {
    console.log("SEMPRE SEREI EXECUTADO")
}


