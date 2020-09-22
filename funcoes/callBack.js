const Fabricantes = ["Adidas", "Nike", "Dalponte :)"]

const imprimir = function(nome, indice){
    console.log(`${indice + 1}.  ${nome}`)
}

Fabricantes.forEach(imprimir)
/* O forEach irá pegar todos os elementos do Array e 
passar para a função anônima imprimir 
Não é necessário nem especificar index e value (tafuq)*/


//Outra possibilidade, mesmo resultado.
Fabricantes.forEach(function(nome, indice){
    console.log(`${indice + 1}.  ${nome}`)
}
)