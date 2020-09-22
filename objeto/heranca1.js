const ferrari = {
    velMaxima: 324,
    modelo: "F40",
    prototype: "TESTE" // ou __proto__
}

const volvo = {
    velMaxima: 200,
    modelo: "V40"
}

console.log(ferrari.__proto__) // _ _ proto _ _ -> Irá buscando em cadeia, escopo atual -> pai -> avô
console.log(ferrari.__proto__ === Object.prototype) //Object.prototype -> Prototype de todos os objetos.