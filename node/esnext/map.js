const tecnologias = new Map();
tecnologias.set('react',{framework: false})
tecnologias.set('angular',{framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
    [function(){ },'Função'],
    [{},'Objeto'],
    [123,"Número"]
])

chavesVariadas.forEach((value, key) => {
    console.log(key, value)
})

console.log(chavesVariadas.has(123)) //Procura a key especificada
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)


chavesVariadas.set(123,'a')
chavesVariadas.set(123,'b') //Irá apenas sobrescrever a key já existente, não aceita repetição de keys.
console.log(chavesVariadas)