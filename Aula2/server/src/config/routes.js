 const express = require('express');

module.exports = function (server) {

const router = express.Router();
server.use('/api', router);

const Cursos = require('../api/cursos');
const Contatos = require('../api/contatos');

Cursos.register(router, '/cursos');
Contatos.register(router, '/contatos');
};