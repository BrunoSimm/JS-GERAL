function tratarNum(num1,num2){
    let soma = num1 + num2
    console.log(`R$ ${soma.toFixed(2).replace(".",",")}`)
}
tratarNum(0.1,0.2)