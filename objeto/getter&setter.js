const Pessoa = {
    _idade : 21,
    _nome: "Bruno", //_ -> Evitar RangeError: Maximum call stack size exceeded
    _id: 1, // _ Convenção para atributos privados e evitar o erro: RangeError: Maximum call stack size exceeded

    get idade(){ 
        return this._idade // _ -> evitar : RangeError: Maximum call stack size exceeded
    },
    set idade(newIdade) {
        if (newIdade > 0){
            this._idade = newIdade 
        }
    },

    get nome(){
        return this._nome
    },
    set nome(newNome){
        if(isNaN(newNome) == true){
            return this._nome = newNome
        }
    },
}
Pessoa.idade = 22
Pessoa.nome = "BRUNO TESTE"
console.log(Pessoa.nome, Pessoa.idade)