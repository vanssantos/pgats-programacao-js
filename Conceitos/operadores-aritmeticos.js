
/*
+ dição
- subtração
* multiplicação
/ divisão
% resto
** exponencial

*/



// // + dição
// console.log(10+5) // retorna 15

// // - subtração
// console.log(10-5) // retorna 5

// //* multiplicação
// console.log(10*2) // retorna 20

// // / divisão
// console.log(10/2) // retorna 5

// // % resto
// console.log(10%3) //retorna 1

// //** exponencial
// console.log(4 ** 4) // 256


// //precedencia
// console.log(2 + 3 * 4) // precedencia, executa primeiro a multiplicação e divisão primeiro, depois soma e subtração = 14
// console.log((2 + 3) * 4) // nesse caso, como isolamos a soma, faz primeiro e depois multiplica = 20


// console.log(+ "5" * 2)  // o + antes do "5" significa que o javascript vai converter o 5 que está como string em número

// //se fizermos  + "5" + 2   ---- vai retornar 7, pq o javascript vai converter de string para interiro
// console.log(+ "5" + 2 )


// console.log(11/2) // retorna sem transformação, ou seja, retorna decimal
// console.log(parseInt(11/2)) // retorna valor inteiro


//arredondamento para baixo
console.log(Math.floor(5.8)) 

// arredonda para cima
console.log(Math.ceil(5.8))

//arredonda para o mais próximo
console.log(Math.round(5.8)) //arredonda para 6
console.log(Math.round(5.4)) // arredonda para 5
console.log(Math.round(5.5)) //arredonda para 6

//informando quantas casas decimais quer retornar
const valorDecimal = 2.1655
console.log(valorDecimal.toFixed(2)) // ele arredonda se tiver número acima de 5