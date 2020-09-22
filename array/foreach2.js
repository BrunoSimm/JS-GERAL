const aprovados = ["Bruno","Ka","Samu","Be"]
//Esta function é uma função callback
aprovados.forEach2(function(value, index, array){//forEach possui 3 parametros (valor, index e o próprio array)
    console.log(`${index+1}: ${value}`)
    console.log(array)
})