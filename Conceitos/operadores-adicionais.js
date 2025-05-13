
/*
-- decremente   - diminui ou reduz em 1 o valor da variável
++ incremento   - aumenta em 1 o valor da variável


? ternário   - condicional de uma linha

*/

// ++ incremento 
let pesoDog = 10
console.log(pesoDog)

pesoDog++
console.log(pesoDog)


// -- decremente
// let pesoTutor = 100
// console.log(pesoTutor)

// pesoTutor--
// console.log(pesoTutor)


//  ? ternário
//<condicao> ? <acao se verdadeira> : <acao se falso>
10 > 15 ? console.log("sim") : console.log("não")

//OU
const porte = pesoDog <= 10 ? 'pequeno' : 'grande'
console.log(porte)

//const porte = pesoDog <= 10 ? 'pequeno' : 'grande'
//             <condicao>        <se>        <senao>

//ternario com senao se
const pesoDodogOperadorTernario = 21
const porteNovo = pesoDodogOperadorTernario <=10  // se  / if
                ? 'pequeno'
                : pesoDodogOperadorTernario <= 20  // senao se / else if
                ? 'médio'
                : 'grande'  //senao

console.log(porteNovo)





