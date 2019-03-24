const express = require('express');
const cors = require('../middleware/cors');
const scoresApi = require('../routes/scores');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(cors);
    app.use(express.json());
    app.use('/scoreboard/api/scores', scoresApi);
    app.use(error);
}