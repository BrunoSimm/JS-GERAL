/*Função pode ser declarada sem argumentos, 
caso seja chamada com argumentos pode-se utilizar o atributo arguments[] 
com todos os argumentos em um array
*/
function soma(){
    let soma = 0;
    for (i in arguments){ //for in 
        soma = soma + arguments[i]
    }
    return soma;
}
console.log(soma(1,5,6))