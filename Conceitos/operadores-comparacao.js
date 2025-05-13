
/*
    >   - maior que
    >=  - maior ou igual que
    <   - menor que        
    <=  - menor ou igual que
    ==  - igualdade somente de valores
    === - igualdade de valor e tipo (é mais seguro usar esse porque ele valida o tipo e valor)
    !=  - diferença somente de valores
    !== - diferença de valores e tipos

*/


// //maior que
// console.log(`10 > 5 =  ${ 10 > 5}`)
// console.log(10 > 5)  //retorna verdadeiro
// console.log(10 > 20) //retorna falso


// //maior ou igual que
// console.log(10 >= 10) //falso
// console.log(10 >= 9) //verdadeiro


//igualdade
// console.log(1 == '1') // javascript faz a correção de tipo para alguns casos, nesse caso, faz
// console.log(true == 1) //retorna true, pq 1 é considerado true


// // igualdade de valores e tipo de dado
// console.log(1 === '1')  // retorna false pq embora seja o mesmo valor, o tipo é diferente
// console.log(true === '1') //retorna falso, pq embora true seja igual a 1, o tipo é diferente


//diferença de valores
console.log(10 != 5) // retorna true porque 10 é diferente de 5
console.log(10 != 10) // retorna false pq é igual
console.log(1 !== '1')



