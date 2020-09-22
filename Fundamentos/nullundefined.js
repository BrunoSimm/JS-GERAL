let valor //não inicializada
console.log (valor) // undefined -> nunca foi inicializada, não existe(?)

valor = null //ausencia de valor, foi inicializada mas não aponta pra nenhum local de memória
console.log (valor)


// 

const a = {name:"teste"} /* A constante a não "tem" o conteudo do objeto,
                            e sim o endereço do objeto */
console.log (a)

const b = a // b recebendo a fara com que ele recebea o endereço do objeto
console.log (b)

b.name = "teste2" /* ATRIBUIÇÃO POR REFERENCIA
                     Mudando um valor do objeto através de qualquer const 
                     levara a mudança diretamente ao objeto, alterando todos os relacionados.
                     Dessa forma, mudando o atributo name através de b, 
                     a também sofrera através referencia
                     */
console.log (a) 

//--//

let c = 2
let d = c // Não iguala endereço de memória, apenas copia do valor
console.log(d) //2

d++ // ++ Adiciona uma unidade
console.log (d) 
console.log (c) // c não é afetado