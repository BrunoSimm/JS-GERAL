const escola = "ufrgs:(" // declarando string
const teste = " não passei"
const teste1 = " fudeu"

console.log(escola.charAt(4)) /* Encontra o caracter na posição
                              charAt(X) onde X é a posição, partindo de 0 (u), 1 (f) */


console.log (escola.charCodeAt(3)) // Encontra o caracter na tabela ASCII/Unicode (g->103)
console.log (escola.indexOf("s")) //Procura na string e relata a posição do primeiro termo (s -> 4)


console.log (escola.substring(1)) // Expressa uma sub string sem apartir da posição 1 (frgs...)
console.log (escola.substring(0,3)) // Expressa uma sub string da posição 0 até antes da posição 3(ufr)


console.log ("Escola " .concat(escola).concat("!")) // -> concat serve para agrupar strings
console.log ("Escola " .concat(escola, teste, teste1)) // agrupando strings
console.log ("Escola " + escola + teste + teste1) // Em strings pode-se usar + para agrupa-las

console.log (escola.replace("g", "gui")) // Troca um termo por outro (primeiro termo que encontrar)

console.log ("Ana, Maria, João".split(",")) // Separa uma string em substrings e forma um Array "," (termo entre as substrings)