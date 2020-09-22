const http = require('http')

http.createServer((req,res) => { //Starta um servidor na porta 8080
    res.write("Olá node!")
    res.end()
}).listen(8080)