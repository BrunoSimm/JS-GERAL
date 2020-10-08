const { resolve } = require("path");

function gerarNumEntre(min,max){
    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    return new Promise(resolve => {
        const num = (Math.random() * ((max - min))) + min;
        resolve(num)
    })
}

gerarNumEntre(10,20)
    .then(num => num * 10)
    .then(numX10 => num / 2)
    .then(console.log)
