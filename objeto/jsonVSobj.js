//JSON -> Formato de DADOS, É UM TEXTO! -> Utilizado para interoperabilidade de sistemas. Função não entra em JSON
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: "Bruno",
    falar(){
        console.log(`Olá, meu nome é ${this.d}`)
    }
}
console.log(JSON.stringify(obj)) //Converte todos os atributos em um JSON, funções e demais caracteristicas da linguagem removidos.


console.log(JSON.parse('{"a":1, "b":2}'))//parse -> Converte  JSON p/ Obj.
console.log(JSON.parse('{"a":1, "b":2, "c": "Bruno", "d": {}, "e": [], "f":true}'))

/*
    Padrão do JSON -> atributos em aspas duplas ("a") e separados por virgulas.
    Ex: '{"a":1, "b":2}'
    '{"a":1, "b":2, "c": "Bruno", "d": {}, "e": []}' ->Permite objetos, arrays e boolean.
*/