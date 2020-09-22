// Prototype chain
const avo = {
    atrib1: 4
}

const pai = {
    atrib2: 3,
    __proto__: avo //Referencia a herança para o obj "avo"
}

const filho = {
    atrib2: 8,
    atrib3: 5,
    __proto__: pai //Referencia a herança para o obj pai
}

console.log(filho.atrib2) //Como não encontra no seu contexto, busca na referencia de herança.
console.log(filho.atrib1)

const carro = {
    velAtual: 0,
    velMax: 200,
    delta: 20,
    acelerarMais(){
        if (this.velAtual + this.delta < this.velMax){
            this.velAtual = this.velAtual + this.delta
        } else this.velAtual = this.velMax
    },
    status(){
        return `Velocidade atual: ${this.velAtual}Km/h de ${this.velMax}Km/h.`
    }
}

const ferrari = {
    velMax: 324, //Sombreamento(shadowing) do atributo velMax do protótipo (carro)
    velAtual: 0,
    modelo: "F40",
    delta: 30,
    __proto__: carro // Herança de carro. //Ou Object.setPrototypeOf(ferrari,carro)
}

const volvo = {
    velMax: 200,
    modelo: "V40",
    delta: 15,
    __proto__: carro,
    status(){
        return `${this.modelo}: 
    ${super.status()}` // Super faz referencia ao protótipo do Obj (carro). Evita sombreamento (shadowing)
    }
}

Object.setPrototypeOf(ferrari,carro) //Primeiro parâmetro "filho"(objeto), segundo "pai"(protótipo)

console.log(ferrari.status())

ferrari.acelerarMais()

console.log(ferrari.status())
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()
ferrari.acelerarMais()

console.log(ferrari.status())
console.log(volvo.status())

console.log(volvo) //Atributos herdados pelo protótipo não são listados.
console.log(ferrari)