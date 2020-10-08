const fs = require('fs')
const { type } = require('os')
const { resolve } = require('path')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

function lerArquivo(caminho){
    return new Promise(resolve => {
        fs.readFile(caminho, 'utf-8', (err, conteudo) => {
            let dados = conteudo.split("\n")
            // dados = conteudo.toString()
            resolve(dados); 
        })
    })
}
lerArquivo(caminho)
    .then(conteudo => conteudo.forEach(element => {
        console.log(element)
    }))
