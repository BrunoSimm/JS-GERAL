function Funcionario(nome, salario = 1000){ //atenção: nomes de função em letra maiúscula e variáveis em letras minúsculas para não confundir!
    this.nome = nome;
   
  let cargo; // atributo privado
   
  this.modificarCargo = function(){
      if(salario == 1000){
          return cargo = "Funcionário Contratado"
      }else if(salario < 1000){
          return cargo = "Estagiário"
      }else if(salario > 1000){
          return cargo = "Chefe"
      }
  }
   
  this.getCargo = function(){ //na verdade não é usado um set, e sim um get que acesse esse valor 
      return cargo
      }
   }
   
  f1 = new Funcionario("Maria", 1000)
  f1.modificarCargo()
  f1.cargo = "TESTE"
  console.log(f1.getCargo())