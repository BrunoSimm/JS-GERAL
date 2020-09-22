const saudacao = "olá" //saudacao contexto 1

function exec () {
    const saudacao = "eaiii" //saudacao contexto 2 -> Não ocorre conflito
    return saudacao
}

const cliente = {
    nome : "Pedro" ,
    idade : 15,
    cidade : "poa",
    endereco: { //Objeto interno tem contexto diferente
        rua : "Souza Reis",
        numero: 314,
        apartamento: 105
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente.nome)
console.log(cliente.endereco.rua)