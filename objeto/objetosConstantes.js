function criarPessoa(nome, idade,cargo){
    return{
        nome,
        idade,
        cargo,
    }
}

const p1 = new criarPessoa("Bruno",21,"Otário")

Object.freeze(p1) //Freeze impede que toda e qualquer caracteristica de um objeto seja alterada.

p1.cargo ="a"
console.log(p1)