/* Configuração com o mongo */

const mongoose = require('mongoose')       // Fazer maepamento dos obj para os documentos e conectar a conexão com o mongo
mongoose.Promise = global.Promise          // Usará api de promisses do próprio node (retirar mensagem de advertência devido nã está mais sendo mantida)

module.exports = mongoose.connect('mongodb://localhost/agenda')