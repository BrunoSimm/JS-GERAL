class Pessoa {
    constructor(nome = "Desconhecido",idade = 18, telefone = 123){
        if (isNaN(nome) === true){
            this.nome = nome
        } else this.nome = "Desconhecido"
        if (idade > 0){
            this.idade = idade
        } else this.idade = 18
        this.telefone = telefone
    }
    falar (){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Bruno")
const p2 = new Pessoa("Idiota", -2)
const p3 = new Pessoa("Tosco")
console.log(p1)
p1.falar()
console.log(p2)
console.log(p3)