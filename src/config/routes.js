const express = require('express')

module.exports = function(server) {

    //API routes
    const router = express.Router()
    server.use('/api',router)

    // Agenda Routes
    const agendaService = require('../api/agenda/agendaService')
    agendaService.register(router,'/agendas')
}