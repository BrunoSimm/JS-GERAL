function criarPessoa(nome, idade, telefone){
    return { //Retorna diretamente um objeto!
        nome, // Ou nome: nome
        idade : idade,
        telefone
    }
}

const pessoa1 = criarPessoa("Bruno",21,514545545)

console.log(pessoa1)