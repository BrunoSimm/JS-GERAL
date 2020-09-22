const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

axios.get(url).then(response => {
    funcionarios = response.data
    let menorSalario = funcionarios[0].salario

    const todasMulheresChinesas = funcionarios.filter(function(value){
        if ((value.pais == "China") && (value.genero == "F")){
            return value
        }
    })
    
    todasMulheresChinesas.forEach(element => {
        if (element.salario < menorSalario) {
            menorSalario = element.salario
        }
    });

    console.log(todasMulheresChinesas)
    console.log(menorSalario)
    
})

//Encontrar a mulher chinesa com o maior salario




