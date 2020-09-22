//Map transformar um array em outro
/*
The map() method creates a new array populated with the results 
of calling a provided function on every element in the calling array.
*/
const notas = [1,23,4.2,5,21.3,7]

//Gera um novo array com o mesmo numero de elementos.
const resultado = notas.map(function(value,index){
    return value * 2
})

console.log(resultado)

const soma10 = function (value){
    return value + 10
}

//Podemos passar uma função como parâmetro. 
const resultado10 = notas.map(soma10)
console.log(resultado10)

const paraReal = function(value){
    return `R$ ${parseFloat(value).toFixed(2).replace('.',',')}`
}
//É possível encadear vários maps!!
const resultado1 = notas.map(soma10).map(paraReal)
console.log(resultado1)