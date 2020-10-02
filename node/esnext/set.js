//É um conjunto não indexado (não possui indices) que NÃO aceita repetição

const times = new Set()
times.add("Gremio")
times.add("Internacional")
times.add("Juventude").add("Caxias")
times.add("Gremio")//Repetição será ignorada.

console.log(times, times.size)
console.log(times.has("Gremio"))

times.delete("Caxias")
console.log(times.has("Caxias"))

const nomes = ["Bruno", "Ka", "Samu", "Be", "Bruno"]

const nomesSet = new Set(nomes)
console.log(nomesSet)

