/*Creates a new array with all of the elements of this array 
for which the provided filtering function returns true.*/
const produtos = [
    {nome: "Notebook", preco: 3000, fragil: true},
    {nome: "iPad", preco: 1200, fragil: true},
    {nome: "Copo de Vidro", preco: 9.50, fragil: true},
    {nome:"Copo de Plástico", preco: 5.50, fragil: false}
]
//.filter(elemento,index,array)
//Elementos = cada obj do Array
const frageis = produtos.filter(function(elementos){
    if (elementos.fragil == true){
        return true
    } else return false
})

const caros = produtos.filter(function(elementos,index,array){
    if (elementos.preco > 1000){
        return true
    }else return false
})


console.log("Frageis:",frageis,`
Mais caros que R$ 1000:
`,caros)


//Ou com uma função callback já pronta. 
const caros1 = function(elemento){
    if (elemento.preco > 1000) {
        return true
    } else return false
}

const isFragil = function(elemento){
    if (elemento.fragil == true){
        return true
    } else return false
}
//É possível encadear "filters"
console.log(produtos.filter(caros1).filter(isFragil))

