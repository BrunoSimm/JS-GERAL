// Um objeto é uma coleção de chave(nome) e valor("bruno"), identificador + valor
// {} representa um objeto ; [] representa um array
// Um objeto é diferente de um json (tipo textual p/ comunicação entre sistemas)
const prod1 = {} 
const prod2 = {}



prod1.nome = "Bruno" // criando uma chave(nome) para o Objeto prod1 (chave = atributo)
prod1.sobrenome = "Fracasso" // valor
prod2["Bruno"] = "Fracasso" // Chave + valor

console.log(prod1)
console.log(prod2)


// Forma que mais gostei -> Mais organizado
const prod3 = { // declaração do Objeto prod3
    
    nome : "Geladeira", // chave + valor
    preco : 1000,    
    carac: { //Objeto dentro de um objeto 
        tamanho : "1,45 metros",
        ano: 2015,
        marca: "Eletrolux",
        
    }

}
console.log (prod3)
console.log (prod3.preco) // apenas o preco(chave + valor) do objeto

delete prod3.preco //Deleta uma chave do objeto
console.log (prod3) 

//criando objetos / treinando
const Carro = {
ano: 2019,
modelo: "completo",
kms: 1580.96, // atributo -> chave (kms) + valor (1580.96)
donos : { //objeto dentro do objeto
    dono1 : "Fulano", 
    dono2 : "Beltrano",
    dono3 : "Ciclano",
    donoatual: "Belano",
}
}
console.log(Carro.donos.donoatual) /* Pego dentro do objeto Carro, 
                                    apenas o donoatual no objeto interno donos */

//treinando -> outra forma de atribuir atributos ao objeto
const moto = {} //objeto vazio
moto.ano = 2005
moto.cor = "Azul"
moto.combustivel = "Flex"
moto.donos = {
    dono1 : "Fulano", 
    dono2 : "Beltrano",
    dono3 : "Ciclano",
    donoatual: "Belanoooo"
}
delete moto.cor //Deletando o atributo cor do Objeto moto
console.log(moto)
