//Object.preventExtensions -> impede novos atributos, permite delete e edição de atributos.
function criarPessoa(name,age,gender){
    return Object.seal({
        name,
        age,
        gender,
        falar(){
            console.log(`Olá, meu nome é ${this.name}. Tenho ${this.age} anos!`)
        }
    })
}

const p1 = new criarPessoa("Bruno",21,"M")

p1.age = 22 //Permite
p1.telefone = 123123123 //Não permite
delete p1.age //Não permite
console.log(p1)