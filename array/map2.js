const carrinho = [
    '{"nome": "Borracha","preco": 3.45}',
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno","preco": 7.90}',
    '{"nome": "Caneta","preco": 3.99}',
    '{"nome": "Borracha","preco": 3.45}',
]

const precos = carrinho.map(function(value,index,array){
    return JSON.parse(value)
}).map(function(value){ //Value = cada produto.
    return value.preco
})

console.log(precos)

//Ou => Utilizando funções, mais claro.

const paraObj = function(json){ //Transforma cada posição do array carrinho de JSON em Objeto.
    return JSON.parse(json)
}
const getPreco = function(produto){
    return produto.preco
}

const resultado = carrinho.map(paraObj).map(getPreco)
console.log(resultado)