const { logger } = require('../startup/logging');

module.exports = function(err, req, res, next) {
    if (err) {
        logger.error(err.message, err);
        return res.status(500).send('Server error.');
    } else {
        next();
    }
}