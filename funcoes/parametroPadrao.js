/*
Geração de valores padrões
*/ 
function soma1 (a,b,c) {
    a = a || 1 //Caso não passe o parametro a, ou então passe 0, irá assumir o padrão 1
    b = b || 1 
    c = c || 1
    return a+b+c
}
console.log(soma1())//3
console.log(soma1(2,))//4 -> a recebe 2 e restante 1
console.log(soma1(0,0,0)) // 3 -> Neste caso retorna um valor errado.


//Padrão utilizando NaN, melhor caso os parametros devam ser apenas Numbers.
function soma2(a,b,c){
    a = isNaN(a) ? 1 : a // Se não for um numero (string,boolean etc receba 1), caso contrario o parametro.
    b = isNaN(b) ? 1 : b
    c = isNaN(c) ? 1 : c
    return a+b+c
}   

console.log(soma2(0,0,0)) //0
console.log(soma2(5,"HAHA",6))//12


//Melhor casos os parametros tenham tipos diferentes.
function soma3(a = 1, b = 1, c = 1){
    return a+b+c
}
console.log(soma3(12,'kk',3))//12kk3
console.log(soma3(8,6))//15