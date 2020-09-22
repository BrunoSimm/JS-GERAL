//Em node, um arquivo representa um módulo
//A priori, tudo que criado no módulo fica disponível apenas no módulo.
//Exports e imports para tornar isso visivel para fora.

this.ola = "Fala pessoal" //Exporta
exports.bemVindo = "Bem vindo ao Node!" //Exporta
module.exports.ateLogo = "Até o proximo exemplo!"