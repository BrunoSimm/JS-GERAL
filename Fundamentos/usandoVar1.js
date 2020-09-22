{
    {
        var a = 123
    }
}
console.log (a) // a visivel em todo código

var b = 321
// ctrl + z -> voltar
{
    console.log(b) // b visivel em todo código (global)
}

function teste () {
    var local = "poa" // var delcarada dentro de funcao não será global
    console.log(local)
}
teste()
// console.log(local) // error


var c = 1 // escopo global
{
    var c = 2 //escopo global
    console.log ("dentro=", c) // 2
}
console.log("fora=", c) // 2