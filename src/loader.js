/*  Carregar so principais arquivos de configuração*/

const server = require('./config/server')      // Configuração relativo ao express
require('./config/database')    // Referência ao arquivo de database
require('./config/routes')(server) 











