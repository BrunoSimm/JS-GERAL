const pai = {
    nome: "Bruno",
    idade: 21,
    corCabelo: "Loiro"
}

const filha = Object.create(pai) // Parametro é o protótipo (herança)

console.log(filha.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value:"Katlen" , writable: false, enumerable: true}
})

console.log(filha2)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

for (let key in filha2){
    if (filha2.hasOwnProperty(key) == true){  // Saber se o atributo veio ou não por herança.
        console.log(key)
    } else console.log(`Por herança: ${key}`)
}