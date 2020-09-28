const passo1 = (ctx,next) => { //dados(contexto), função do proximo passo
    ctx.valor1 = "mid1";
    next()
}

const passo2 = (ctx,next) => {
    ctx.valor2 = "mid2";
    next();
}

const passo3 = (ctx) => {
    ctx.valor3 = "mid3"
}

const exec = (ctx,...passos) => {//operador Rest(...) junta todos os parametros em um array. Caso não tenham elementos é atribuido undefined
    const execPasso = indice => {
        if ((passos != undefined) && (indice < passos.length)){
            passos[indice](ctx, () => execPasso(indice + 1))
        }
    }
    execPasso(0)
}

const ctx = {}

exec(ctx,passo1,passo2,passo3)
console.log(ctx)