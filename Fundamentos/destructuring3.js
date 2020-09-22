function rand({min=0, max=100}) { //Gerando um numero aleatório em um escopo
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min:10,max:20}))