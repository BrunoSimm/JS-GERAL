/*08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).*/

const lista = "20,30,15,45,62,12,24"

function processaLista(lista){
    let pontuacoes = lista.split(",") //Separa os elementos
    let menorPontuacao = pontuacoes[0]
    let maiorPontuacao = pontuacoes[0]
    let qtdRecordes = 0
    let piorJogo = 1

    
    for (let i = 0; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdRecordes++
        } else if (pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    console.log(`
    Resultados:
    Maior Pontuação: ${maiorPontuacao}
    Menor Pontuação: ${menorPontuacao}
    Recordes batidos: ${qtdRecordes}
    Pior jogo: ${piorJogo}`)
}

processaLista(lista)