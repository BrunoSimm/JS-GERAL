// Função CONSTRUTORA!
//Funciona como uma Classe no Java, sendo um molde para novas instancias (objetos)
function funcionario(nome, salario = 1000)  {
    //atributos privados ??
    
    let cargo //Deve ser privado, só poderá ser alterado via "set"

    //Métodos publicos
    this.getNome = function (){
        return this.nome
    }

    this.getSalario = function(){
        return this.salario
    }

    this.getCargo = function(){
        return this.cargo
    }

    this.setCargo = function(definirCargo){
        this.cargo = definirCargo
    }
    this.setSalario = function(novoSalario){
        if (novoSalario > 0){
            this.salario = novoSalario
            console.log(`Salário atualizado para R$${novoSalario} com sucesso.`)
        } else console.log("O novo salário deve ser maior que 0.")
    }

    this.setNome = function(novoNome){
        if (isNaN(novoNome)){
            this.nome = novoNome
            console.log(`Nome alterado para ${novoNome} com sucesso!`)
        } else console.log("Erro! O nome deve ser composto apenas de letras.")

    }

}

//Primeira instanciação
const funcionario1 = new funcionario("Bruno", 2500)
funcionario1.setNome("Bruno Simm")
console.log("Nome: " + funcionario1.getNome())

funcionario1.cargo = "PROGRAMADOR" //Alterado sem métodos !?!?
console.log(funcionario1.getCargo()) //Retorno = PROGRAMADOR



funcionario1.nome = "Teste de alteração direta, sem métodos!"
console.log("Nome: " + funcionario1.getNome()) //Atributo privado alterado sem método!

funcionario1.setSalario(1540)
console.log("Salario: " + funcionario1.getSalario()) //1540
funcionario1.salario = 450 //Novamente, posso alterar sem utilizar um método publico para isso.
console.log("Salario: " + funcionario1.getSalario()) //450

//Segunda instancia
const funcionario2 = new funcionario("Alves",4300)
funcionario2.setSalario(50)
console.log("Salario: " + funcionario2.getSalario()) //50
funcionario2.salario = 100 //Como fazer para permitir a mudança apenas pelo método setSalario()?
console.log("Salario: " + funcionario2.getSalario()) //100!!!
