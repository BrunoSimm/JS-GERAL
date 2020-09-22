const chave = "Bruno"
const valor = 45

const obj = {}

obj[chave] = valor //Adicionar dinamicamente um novo par chave : valor ao obj

const obj2 = {[chave]: valor} //Adicionar dinamicamente um novo par chave : valor ao obj

console.log(obj)
console.log(obj2)