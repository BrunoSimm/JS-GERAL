/* Função é um bloco de código, recebe parametros(ou não) de entradas -> executa algoritmo 
-> retorna valor(ou não)
*/

// Função sem retorno
function imprimirSoma(a, b = 0) {    // a e b são parametros da função
console.log(a+b)
soma = a + b
media = soma / 2
console.log (soma, media)
} 
let c = 1
let d = 2
imprimirSoma(c,d) // Passando parametros c e d para função

imprimirSoma(8)/* NaN -> Faltou 1 parametro, necessário tratamento 
                                (b=0 > quando não for passado um valor o b será 0) */


// Função com Retorno
function soma1 (a,b=0){
    return a+b
}

console.log(soma1(c,d))

//treinando
///ex1 - Áreas
function quadrado (ladoq){
    area = Math.pow(ladoq,2)
    return area
}
console.log(quadrado(2))

function triangulo (base,altura){
    area = (base*altura)/2
    return area
}
console.log(triangulo(6,3))

function retangulo (base,altura) {
    area = base * altura
    return area
}
console.log(retangulo(1,5))

function tequilatero (lado){
    area = (Math.pow(lado,2) * Math.sqrt(3))/4
    return area
}
console.log(tequilatero(4).toFixed(2))

function cone(raio,altura) {
    volume = (Math.PI * Math.pow (raio,2) * altura) / 3
    geratrizaoquadrado= (Math.pow(altura,2) + Math.pow(raio,2))
    area = (Math.PI * Math.pow(raio,2)) + Math.PI * raio * Math.sqrt(geratrizaoquadrado)
    return (volume)
}
console.log(cone(2,4).toFixed(2))

function pa(termodeclarado,posicaotermodeclarado,posicaodesejada,razao) {
        an = termodeclarado + ((posicaodesejada-posicaotermodeclarado) * razao) 
        a1 = termodeclarado + ((1-posicaotermodeclarado) * razao) 
        soman = (((a1 + an)/2) * posicaodesejada )
const valores = [an,a1,soman] //Retornando como array
return valores
}
console.log (pa(8,4,5,2))    
