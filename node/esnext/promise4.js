function gerarNumEntre(min,max,tempo){
    if (min > max){
        const temp = min;
        min = max;
        max = temp;
    }

    return new Promise(resolve => {
        setTimeout(function(){
            const num = (Math.random() * ((max - min))) + min;
            resolve(num)
        },tempo)
    })
}

function gerarVariosNum(){
    return Promise.all([
        gerarNumEntre(1,60,1000),
        gerarNumEntre(1,60,500),
        gerarNumEntre(1,60,4000)
    ])
}
console.time('promises')
gerarVariosNum()
    .then(numeros => console.log(numeros))
    .then(() => {
        console.timeEnd('promises')
    })

