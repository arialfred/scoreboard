const express = require('express');
const config = require('config');
const { logger } = require('./startup/logging');
require('./startup/config')();
require('./startup/database')();
const app = express();
require('./startup/routes')(app);
const port = config.get('port')
const server = app.listen(port, () => logger.info(`Scoreboard backend started. Listening on port ${port}.`));
