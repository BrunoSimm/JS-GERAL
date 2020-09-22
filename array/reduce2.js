const alunos = [
    {nome: "Bruno", nota: 9, bolsista: false},
    {nome: "Ka", nota: 10, bolsista: false},
    {nome: "BSimm", nota: 8, bolsista: false},
    {nome: "BSimm", nota: 7.5, bolsista: true}

]
//Desafio 1: Todos os alunos são bolsistas?
//.map => seleciona o atributo bolsista
//.reduce => testa todos os elementos e retorna o resultado no final.
console.log(alunos.map(aluno => aluno.bolsista))


const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce(function(acumulador,atual){
    if (acumulador && atual == true){
        return true
    } else return false
})
console.log(todosBolsistas)

//Desafio 2: Algum aluno é bolsista?
const anyBolsista = alunos.map(aluno => aluno.bolsista).reduce(function(acumulador,atual){
    if (acumulador || atual == true){
        return true
    } else return false
})
console.log(anyBolsista)