const { promises } = require('fs')
//com Promise
const http = require('http')

const getTurma = (letra,callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject) => {
        http.get(url,res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}



Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos =>  alunos.map(alunos => alunos.nome))
    .then( nomes => console.log(nomes))
    .catch(e => console.log(e.message))
    

//Recurso do ES8
let obterAlunos = async () => {
    const tA = await getTurma('A')
    const tB = await getTurma('B')
    const tC = await getTurma('C')
    return [].concat(tA,tB,tC)
}

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))