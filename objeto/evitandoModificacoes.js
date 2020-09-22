//Object.preventExtensions -> impede novos atributos, permite delete e edição de atributos.
function criarPessoa(name,age,gender){
    return Object.seal({ //Objetct.seal() já evita alterações.
        name,
        age,
        gender,
        falar(){
            console.log(`Olá, meu nome é ${this.name}. Tenho ${this.age} anos!`)
        }
    })
}

const p1 = new criarPessoa("Bruno", 21 ,"M")
Object.seal(p1)
//Object.preventExtensions(p1)
p1.name = "aaaa"
p1.age = 23
p1.teste = "Testando"//Não permite!
console.log(p1)

delete p1.name //Permite!
delete p1.age
p1.falar()
console.log(p1)
console.log("Extensivel? ", Object.isExtensible(p1)) //Verifica se um objeto é alterável.
//***** */
const produto = Object.preventExtensions({
    cor: "Preto", preco: 100
})
console.log("Extensivel? ", Object.isExtensible(produto))
console.log(produto)
produto.teste = "bbbb"//Não permite!
console.log(produto)


// Object.seal() -> Impede adicionar & remover atributos. 
const produto2 = Object.preventExtensions({
    cor: "Preto", preco: 100, tag: "Promo"
})

Object.seal(produto2)
delete produto2.cor //Não permite!
produto2.desconto = 0.1 //Não permite!
produto2.cor = "Azul" //Permite!
console.log(produto2)
console.log("Selado? ", Object.isSealed(produto2))


// Object.freeze -> selado + valores constantes


