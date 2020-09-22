function fun1(){
    //Caso não tenha return, será retornado undefined.
}       



const fun2 = function(){ //Função anonima, atribuida a uma cosnt
    console.log(`Teste de função: ${fun1()}`)
}
fun2()
const arrayFun = [fun1,fun2, function(a,b) { return a+b }] 
//Conseguimos colocar uma função em um array.

console.log(arrayFun[0])//Retorna o tipo
console.log(arrayFun[1]) //Retorna o tipo
console.log(arrayFun[2](2,3)) //5

//Armazenar em um atributo de objeto

const obj =  {
    falar: function() {console.log(this.nome)},
}
obj.nome = "Bruno--"
obj.falar()

//Passar uma função como parâmetro para outra função
function RUN(fun){
    fun()//Utilizar a função na função lol
}

RUN(arrayFun[1])//A fun() irá ser a fun2()

//Uma função pode retornar/conter uma função
function soma (a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(5,4)(1)//Chamando as duas funções e seus parametros