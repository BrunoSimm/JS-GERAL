const resultados = nota => nota >=  7 ? 'Aprovado' : 'Reprovado' //Cria uma function LOL
function resultado (nota){
    let c = typeof nota; 
    
        if (nota >= 7) {
            return "Aprovado"
        } 
        else if (nota < 7){
            return "Reprovado"
        }
        else "Insira uma nota entre 0 e 10"
        
    
}
let nota = 8
console.log(resultados(nota))
console.log(resultado(nota))