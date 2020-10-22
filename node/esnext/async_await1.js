const { rejects } = require("assert");
const { Console } = require("console");

function retornarDobro(valor){
    return new Promise((resolve) => {
        setTimeout(() => resolve(valor * 2),5000)
    })
}

async function executar(){
    const valor = await retornarDobro(250) //await aguarda a resolução da função para então executar os proximos passos
    console.log(valor)

    return valor + 100
}
async function acessaValor(){
    let valor = await executar()
    console.log(valor)
}

acessaValor()
