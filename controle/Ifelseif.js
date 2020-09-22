Number.prototype.testaEscopo = function (minimo,maximo){ //
    return (this >= minimo && this <= maximo) //This "pega" NOTA -> Depende do escopo, sempre
}

const imprimeResultado = function (nota){
    const testaNumero = Number(nota)
    if ((Number.isNaN(testaNumero)===false) && (nota >= 0 && nota <= 10)){ //Testa se nota é Number
        if (nota.testaEscopo(9,10)){
        console.log('Laureado')
}       else if (nota.testaEscopo(7,8.99)){
        console.log("Aprovado")
}       else if (nota.testaEscopo(0,6.99)) {
        console.log("Reprovado")
}   
}   else console.log("Valor Inválido")
}
imprimeResultado (9)
imprimeResultado ("Jujubinhas")
