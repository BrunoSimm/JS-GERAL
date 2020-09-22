function soBoaNoticia(nota){
    const teste = Number(nota)
    if ((Number.isNaN(teste) === false) && (nota >= 0 && nota <=10)) { //Testa se nota é Number
        if (nota >= 7) {  
        console.log("Aprovado com nota " + nota)
    } else console.log("Reprovado com nota " + nota)
    } else console.log(nota + " não é um número válido para essa operação")
}

var nota = "Sorvete de Milho"
soBoaNoticia(nota)
var nota = 11
soBoaNoticia(nota)
var nota = 5
soBoaNoticia(nota)
var nota = 7
soBoaNoticia(nota)


console.log("-----------------------------")
function SeTrueEuFalo (valor){
    if (valor){ //Interpreta como verdadeiro ou falso
        console.log(valor + " é verdade e eu falei")
    } else (console.log("Pare de mentir!"))
}

const teste = 1 //True
SeTrueEuFalo(teste)
const teste2 = 0 //False
SeTrueEuFalo(teste2)
