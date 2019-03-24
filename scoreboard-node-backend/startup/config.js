const config = require('config');
const Joi = require('joi');

module.exports = function() {
    const configSchema = {
        port: Joi.number().integer().required().min(0).max(65535),
        database: Joi.string().required().min(5).max(500)
    };
    const { error } = Joi.validate(config, configSchema);
    if (error) {
        throw new Error('Fatal error: ' + error.details[0].message);
    }
}