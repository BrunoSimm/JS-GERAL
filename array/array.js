const alunos = new Array("Bruno","Katlen","Samuel")
console.log(alunos)

const professores = ["Simm", "Correa"]
console.log(alunos,professores)

alunos[3] = "Bernardo"
professores.push("Gonçalves") //Adicionar elemento no final do array (push)

console.log(alunos,professores)

alunos[6] = "Tiago"
console.log(alunos, "Tamanho: " + alunos.length)

alunos.sort()//Ordena do menor para o maior (Alfabético e numérico) =>Altera o array original
console.log("Ordenados: " + alunos)


alunos.splice(0,2,"Elemento1","Elemento2") //Excluir 2 elementos, partindo do index 0 e adicionar outros dois elementos 1 e 2
console.log(alunos)

