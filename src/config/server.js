const port = 3003

const bodyParser = require('body-parser')           // Fará o parser das requisições
const express = require('express')                  // Servidor web que roda em cima do node
const server = express()  
const allowCors = require('./cors')                          // Instancia do express

server.use(bodyParser.urlencoded({extended:true}))  // Sempre que chegar requisição urlencoded o bodyparser fará o gerenciamento e extended para suportar maiores requisições
server.use(bodyParser.json())                       // Faz parser de arquivos json
server.use(allowCors)

server.listen(port, function(){
    console.log(`Backend is runnig on port ${port}.`)
})

module.exports = server