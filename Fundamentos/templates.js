const nome = "Rebeca"
const concatenacao = ("Olá " + nome + "!")
console.log(concatenacao) // Olá Rebeca!


const template = `  
Olá
${nome}!
` 
/* Template considera as quebras de linha etc. ${xxx} tudo 
   dentro da expressão será interpretado(somas, var, etc) 
*/
console.log(template)


const up = texto => texto.toUpperCase() //toUpperCase() => Função para deixar tudo maiusculo
console.log (`Ei... ${up("cuidado")}!!
`) // -> CUIDADO
var text = "isso está tudo em minusculas"
console.log(up(text)) // Função up deixando tudo em maisculas


const down = texto => texto.toLowerCase() // função para transformar string em lower case
var text1 = "ISSO ESTÁ TUDO EM MAISCULAS"
console.log (down(text1)) // texto transformado em lower case