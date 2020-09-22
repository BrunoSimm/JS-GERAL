const Pessoa = {
    name: "BRuno",
    age: 21,
    gender: "Male",
    formation: {
        course: "SI"
    }

}

console.log(Object.keys(Pessoa)) //Retorna as chaves de um objeto
console.log(Object.values(Pessoa)) //Retorna os valores do objeto
console.log(Object.entries(Pessoa)) /*Retorna cada par chave e array em um array de duas posições. 
Todos dentro de um array maior com todos os pares chave-valor*/

Object.entries(Pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
// Ou
Object.entries(Pessoa).forEach(([chave,valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(Pessoa,"dataNascimento", {
    enumerable: true, //Se o atributo aprecerá durante a chamada de métodos como Object.entries
    writable: false,//Se o atributo poderá ser editado
    value: "05/08/1998" //Já atribui um valor.
})


console.log(Object.entries(Pessoa))

const destino = {a : 2}
const obj1 = {b : "Bruno"}
const obj2 = {c : 45, a : 3}

Object.assign(destino, obj1, obj2) //Assign "concatena" x atributos dos objetos em um objeto de destino. Caso o atributo já exista ele é sobrescrito.

console.log(destino)

