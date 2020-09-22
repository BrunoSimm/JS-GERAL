let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer) // Expressa o tipo de uma variável

qualquer = 3.1415 // redeclara o valor de qualquer para number
console.log(qualquer)
console.log(typeof qualquer)

/* É possivel reatribuir valor para variaveis não const,
    por isso Js é considerado de tipagem fraca 
*/

let teste = true // Declarando var teste booleana (true ou false)
console.log(teste)
console.log (typeof teste) // typeoff = boolean
teste = false 
console.log(teste) // Boolean também permite reatribuir valor durante o código
teste = 12
console.log (teste) // É possivel mudar a origem da variavel mesmo depois de declarar como outro tipo
console.log (typeof teste) // typeof = number
