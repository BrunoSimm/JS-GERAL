function funcionarOuNao(valor, chanceErro){
    return new Promise((resolve, reject)=> {
        try{
            con.log('ssdasd')
            if (Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e){
            reject(e)
        }
    })
}

funcionarOuNao(2,0.3)
    .then(
        valor => console.log(valor),
        err => console.log('Erro especifico: '+err))
    .catch(err => console.log(`Erro: ${err}`))