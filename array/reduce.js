/*The reduce() method executes a reducer function (that you provide) 
on each element of the array, resulting in single output value.*/
//Serve para acumular(somar,dividir etc.) todos os elementos do array, pode ser obj, outro array, numeros, strings etc.
const alunos = [
    {nome: "Bruno", nota: 9, bolsista: true},
    {nome: "Ka", nota: 10, bolsista: false},
    {nome: "BSimm", nota: 8, bolsista: false},
    {nome: "BSimm", nota: 7.5, bolsista: false}

]
console.log(alunos.map(aluno => aluno.nota))


//Acumulador começa no 9 e atual no 10. Após a primeira execução, o acumulador recebe o valor da soma dos dois anteriores (19).
//(anterior,atual)
const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador,atual){
    console.log(acumulador,"+",atual,"=>")
    return acumulador + atual
})
