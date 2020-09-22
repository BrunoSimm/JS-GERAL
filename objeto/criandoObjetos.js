//Função construtoras
function Produto(nome, preco, desconto, id){
    this.nome = nome //This torna o atributo público
    this.id = id
    this.getPrecoDesconto= function(){
        return preco * (1 - desconto)
    }
}

const produto1 = new Produto("Mouse", 220.30, 0.1, 10)

console.log(produto1) //Só retorna aquilo que é publico -> nome, id e getPrecoDesconto


//Função Factory
function createFunctionary(name, baseSalary,faults){
    return{
        name,
        baseSalary,
        getSalary(){
            return (baseSalary / 30) * (30 - faults)
        }
    }
}

const functionary1 = createFunctionary("Katlen",1400,5)
console.log(functionary1, "Salário final: " + functionary1.getSalary().toFixed(2))


