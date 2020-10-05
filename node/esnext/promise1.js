let a = 12;
console.log(a);





//function (cumprirPromessa) -> chama a função cumprirPromessa 
let p = new Promise(function (resolve){
    resolve([1,2,5,6,3,"Bruno"]); //
});

p.then(function(valor){ //Executa, recebendo apenas 1 parametro
    console.log(valor) //[1,2,5,6,3,"Bruno"]
    return valor[5] //Próxima chamada irá receber apenas estes valor!
})
.then(primeiraLetra => primeiraLetra[0]) //Abreviação da funcão acima, mesmo resultado. Return posiçao 0 da string
.then(letraMinuscula => letraMinuscula.toLowerCase())
.then(letra => console.log(letra))



function quintoElemento(array){
    return array[5];
}

function primeiraLetra(string){
    return string[0]
}


//Usando funcões prontas
/* 
p.then(quintoElemento)
.then(primeiraLetra)
.then(letraMinuscula => letraMinuscula.toLowerCase())
.then(letra => console.log(letra))
*/

