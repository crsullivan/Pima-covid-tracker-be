const express = require('express');
const configureMiddleware = require('./configure-middleware')

const authRouter = require('../admin/auth-router')
const dataRouter = require('../data/data-router')

const server = express();

configureMiddleware(server);

server.use('/admin', authRouter)
server.use('/data', dataRouter)

server.get('/', (req, res) => {
    res.send("It's alive!");
  });

module.exports = server;