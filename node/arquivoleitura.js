const fs = require('fs') //Importando o FileSystem do node (nativo)
const { dirname } = require('path')

const caminho = __dirname + "/arquivo.json"

//sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrona
//caminho, encode, função callback (error, conteúdo arquivo)
fs.readFile(caminho,'utf-8', (err,conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname,(err,arquivos) => {
    console.log("COnteudo da pasta:")
    console.log(arquivos)
})