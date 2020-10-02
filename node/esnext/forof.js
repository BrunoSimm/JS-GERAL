//Itera sobre os valores, diferente do forIn que itera sobre as chaves(indides). Bom para iterar em Set,Maps, Strings

for (let letra of "Bruno"){
    console.log(letra)
}

const nomes = ["Bruno", "Ka", "Samu", "Be", "Bruno"]

const nomesSet = new Set(nomes)

for (let nome of nomesSet){
    console.log(nome)
}

for (let i in nomes) {
    console.log(i)
}