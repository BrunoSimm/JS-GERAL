//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) { //Função anonima -> atribuida a uma var/const
console.log (a+b)
}
imprimirSoma(2,3)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => { // => substitui o texto function
    return a + b
}
console.log (soma(2,4))


// Retorno implicito
const subtracao = (a, b) => a - b /* Usado em funções de apenas uma linha (o return é a-b)
                                    Não abre chaves, nem escreve function */
console.log (subtracao(3,2))

const soma2 = (a, b) => a+b 
console.log (soma2(1,2))