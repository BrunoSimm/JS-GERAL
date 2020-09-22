class Pessoa {
    constructor (nome){ //Construtor de todo novo objeto/instancia.
        this.nome = nome

    }
     
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa1 = new Pessoa("Bruno") //Instânciação(novo objeto) da Classe Pessoa
pessoa1.falar()


//Factory
const criarPessoa = function(nome) {
    return {
        falar : function(){
            console.log(`Meu nome é ${nome}`)
        }
    }
}

pessoa2 = criarPessoa("Simm")
pessoa2.falar()

function CriarPessoaFact (nome) {
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const pessoa3 = new CriarPessoaFact("Alves")
pessoa3.falar()