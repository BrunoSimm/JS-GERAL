/* Arrays no JS são heterogeneos(tipagem fraca), não são fixos(referente ao tamanho)
Array tem um tipo object no JS
*/

const valores = [7,5,72,37,4.2,2.4] // Array com 5 elementos
console.log (valores[0], valores [1], valores [4])
valores[6] = 3.5 // Define uma nova posição e um novo valor no array
valores[12] = 2 // Define posição 12
console.log (valores) // Mostrará os 6 definidos, 5 vazios, e o 12 (total 13)

console.log (valores.length) // Tamanho do array, inclusive os espaços vazios (total 13)

// Retirar elementos
console.log (valores.pop()) // Retira o ultimo elemento do array e o retorna (2, posição 12)
delete valores[0] // Deleta a posição requerida 
console.log (valores)


//Arrays são Objetos
console.log (typeof valores) // Retorna o valor de Object para Arrays