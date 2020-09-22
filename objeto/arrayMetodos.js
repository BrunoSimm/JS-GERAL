const pilotos = ["a","b","c","d"]

//Métodos
pilotos.pop() //Remove o ultimo elemento do Array
pilotos.shift()//Remove primeiro elemento do Array
pilotos.push("e")//Adiciona novo elemento na ultima posição.
pilotos.unshift("1")//Adiciona um elemento na primeira posição.


console.log(pilotos)


pilotos.splice(2,1,"2","3") //Pode remover elementos(c) e adicionar(2 e 3)
console.log(pilotos)


const novosPilotos = pilotos.slice(2) //Gera um novo array, do termo escolhido em diante! (pega um pedaço do array!)

console.log(novosPilotos)

const X = pilotos.slice(1,4)
console.log(X)