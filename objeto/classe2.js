class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Prof"){
        super(sobrenome)//Super chama o construtor da Herança (avo)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super("Simm")
    }
}

const filho = new Filho
console.log(filho)