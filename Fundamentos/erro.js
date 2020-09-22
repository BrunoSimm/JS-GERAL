function tratarErroeLancar(erro){
    throw new Error("Erro xxx") //Retorno de erro
}


function imprimirNomeCaps (obj1){
    try {
        console.log(obj1.name.toUpperCase() + "!!!")
    } catch(erro){ // Caso de erro no try ele entra em catch
        tratarErroeLancar(erro)
    } finally {
        console.log('Final') //Sempre executa, se der erro ou não
    }
    }
    

const user = {
    nome: "Bruno",
    CPF: 04057357076
}
imprimirNomeCaps(user)