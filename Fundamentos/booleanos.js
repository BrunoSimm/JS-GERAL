let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log (isAtivo)


isAtivo = 1 // 1 = true
console.log (!!isAtivo) // ! significa negação, !! seria negação da negação -> logo o estado original


isAtivo = 0 // 0 = false
console.log (!!isAtivo) // false
console.log (isAtivo) // 0
console.log (!isAtivo) // true -> negação (não é false)

// Os verdadeiros -> qualquer numero inteiro, exceto 0, strings não vazias, arrays etc
console.log (!!1)
console.log (!!3)
console.log (!!-2)
console.log (!!" ")
console.log (!!{})
console.log (!![])
console.log (!!(isAtivo = true))

//Os falsos -> 0, string vazia, null, NaN, undefined
console.log (!!0)
console.log ("")
console.log (!!null)
console.log (!!NaN)
console.log (!!undefined)
console.log (!!(isAtivo = false))

console.log (!!("" || null || NaN || undefined ||0 || "  a")) // true pelo "  a"; || = OU

let nome = ""
console.log ("Bem vindo " + (nome || "Desconhecido")) 
/* Se a var nome for true(não vazia) imprimirá o seu valor
Caso seja false(vazia), Desconhecido
*/
