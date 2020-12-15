const fs = require('fs') //Importando o FileSystem do node (nativo)
const { dirname } = require('path')
const ObjectsToCsv = require('objects-to-csv');

const caminho = __dirname + "/arquivo.json"

const teste = __dirname + "/logs.json"


fs.readFile(teste,'utf-8', (err,conteudo) => {
    const logs = JSON.parse(conteudo)
    console.log(`${logs.data[0]._id} + ${logs.data[0].address_from_auth}`)
    //console.log(logs)
    const total = logs.data;
    console.log(total.length)
    
    const filtrarByDomain = total.filter(function(value){
        if ((value.address_from_auth == "boleto@rovernet.com.br")){
            return value
        }
    })


    new ObjectsToCsv(filtrarByDomain).toDisk('./test.csv', { allColumns: true });
    

    console.log(filtrarByDomain.length)
    fs.writeFile(__dirname + "/logsFiltrado.json", JSON.stringify(filtrarByDomain),err => {
        console.log(err || "Arquivo salvos!")
    })

    
    })

/*
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
*/