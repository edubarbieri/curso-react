const express = require('express');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);
    const todoService = require('../api/todo/todoService');
    console.log('registering /api/todo...')
    todoService.register(router, '/todos');
}