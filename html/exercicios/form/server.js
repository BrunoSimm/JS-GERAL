const express = require('express')
const bodyParser = require('body-parser')

const app = express()


app.use(bodyParser.urlencoded({extended:true}))//Interpreta a requisição e transforma em objeto para ser usado no node.

app.post('/usuarios',(req,resp) => {
    console.log(req.body)
    resp.send('<h1>Incluido!</h1>')
})

app.post('/usuarios/:id',(req,resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Usuário alterado!</h1>')
})
app.listen(3003)


