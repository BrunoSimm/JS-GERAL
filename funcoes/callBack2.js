const notas = [5,2,7,8,9,10,4.5]

const NotasBaixas = notas.filter(function(notas){
    if (notas < 7)
        return true
})

console.log(NotasBaixas)


