const { rejects } = require("assert");

function gerarNumEntre(min,max,numerosProibidos){
    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    return new Promise((resolve,reject) => {
        const num = (Math.random() * ((max - min) + 1)) + min;
        if(numerosProibidos.includes(num)){
            reject('Numero repetido!')
        } else{
            resolve(num)
        }
    })
}

gerarNumEntre(1,5,[1,2,4])
    .then(console.log)
    .catch(console.log)