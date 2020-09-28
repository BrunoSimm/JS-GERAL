const express = require('express')
const bancodedados = require('./bancodedados')
const bodyParser = require('body-parser')


const porta = 8003
const app = express()
app.use(bodyParser.urlencoded({extended:true })) //Para aceitar x-www-form-urlencoded no postman


app.get('/produtos', (req,res,next) => { //Retornar todos os produtos
    res.send(bancodedados.getProdutos()) //Converter para JSON
})
app.get('/produtos/:id',(req,res,next) => {//Retornar um produto pelo id
    res.send(bancodedados.getProduto(req.params.id)) //pega o parametro da url (:id)
})
app.post('/produtos', (req,res,next)=>{ //Cadastrar um produto
    const produto = bancodedados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) //JSON
})
app.put('/produtos/:id', (req,res,next)=>{//Alterar um produto pelo ID
    const produto = bancodedados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })

    res.send(produto) //JSON
})
app.delete('/produtos/:id', (req,res,next)=>{ //Delete de um produto por id
    const produto = bancodedados.excluirProduto(req.params.id)
    res.send(produto) //JSON
})

app.listen(porta, ()=>{
    console.log(`Servidor executando na porta ${porta}!`)
})


