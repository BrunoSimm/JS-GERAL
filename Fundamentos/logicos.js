function compras (trabalho1, trabalho2){ //Booleans
    const comprarSorvete = trabalho1 || trabalho2 // || ou
    const comprarTV50 = trabalho1 && trabalho2 // && e
    const comprarTV32 = trabalho1 != trabalho2 // ! =   != (Diferente)
    const manterSaudavel = !comprarSorvete // ! faz a negação/inverso
    return { comprarSorvete,comprarTV32,comprarTV50,manterSaudavel } // Return por objeto
    /* Poderia ter feito assim: 
    const objeto1 = {
    comprarSorvete : comprarSorvete,
    comprarTV50 : comprarTV50,
    comprarTV32 : comprarTV32,
    manterSaudavel : manterSaudavel,
    }
    return (objeto1)
     */
}

const trabalho1 = false
const trabalho2 = true
console.log(compras(trabalho1, trabalho2))