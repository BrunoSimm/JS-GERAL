console.log (Math.ceil(5.1)) // Ceil arredonda p/ cima

const obj1 = {}
obj1.nome = "Bruno"
console.log(obj1.nome)

function Obj(nome,idade,sexo) { // Função CONSTRUTORA
    this.nome = nome // This -> Função construtora, passa p/ fora (Deixa o atributo publico!!)
    this.idade = idade // This -> Constroi chaves e valores em objetos (ver obj4)
    this.sexo = sexo
}
// Instanciando a função Obj (new Obj) em novos Objetos(Construindo-os com os parâmetros)
const obj2 = new Obj("Paulo",55)// New Obj da função construtora irá "construir" a chave e valor nome + paulo
obj2.sexo = "Masculino"
console.log(obj2) // Objeto foi constuido pela função Obj, usando this. Recebeu o "nome" através disso
console.log(typeof obj2)


const obj3 = new Obj ("Maria")
obj3.idade = 25;
obj3.sexo = "Feminino"
console.log(obj3)

const obj4 = new Obj("Katlen", 21, "Feminino")
console.log(obj4)