function getPreco(imposto = 0 , moeda = "R$"){
    return `${this.nome}: ${moeda} ${(this.preco * (1 - this.desconto) * (1 + imposto)).toFixed(2)}`
}

const produto = {
    nome: "Notebook",
    preco: 1000,
    desconto: 0.1,
    getPreco //Como já foi declarada, a função é imediatamente atribuida como atributo no objeto.
}

console.log(produto.getPreco())
console.log(produto.getPreco(0.01,"$"))


const carro = {
    nome: "Mercedes",
    preco: 50000,
    desconto: 0.1,
}
console.log(getPreco.call(carro)) //Utilizando "call", atributos devem ter o mesmo "nome".
console.log(getPreco.apply(carro))

//Utilizando parametros no call&apply
console.log(`
Com parametros:
Call -> ${getPreco.call(carro, 0.01, "$")}
Apply -> ${getPreco.apply(carro,[0.4,"$$$$"])}
`)
