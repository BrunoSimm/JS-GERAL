const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Souza Reis",
        numero: 314
    }
}
const {nome:n, idade:i} = pessoa /* const {chave1, chave2, ...} = nomeObjeto que passa as infos
                                Destructuring irá "retirar" os valores de determinadas chaves (nome,idade)
                                e atribuir a novas variaveis (n e i)
                                Para usar o Destructuring em objeto usa const {}, em array const [] */   
console.log(n,i)

const {endereco: {logradouro:l, numero:nm}} = pessoa //Destructuring em objeto de objeto!!
console.log (l,nm)

function pessoaConstrutor(nome,idade){
    this.nome = nome;
    this.idade = idade;
    
}



const a = new pessoaConstrutor("Bruno", 21)
a.endereco = { //Atribuindo novos chaves e valores mesmo depois de utilizar o Construtor!
    logradouro : "a",
    numero : 125
}
console.log(a)