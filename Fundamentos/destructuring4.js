function rand ([min=0, max=1000]) {
    if (min > max) { 
        [min,max] = [max,min] //Inverte os valores
        console.log("trocou") 
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([min=1,max=10]))