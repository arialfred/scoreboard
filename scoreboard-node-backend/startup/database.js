const { openConnection, runQuery } = require('../util/sqlite3');
const { logger } = require('../startup/logging');

module.exports = async function() {
    const db = await openConnection();
    try {
        const sql = 'CREATE TABLE scoreboard_api_score ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "name" varchar(50) NOT NULL, "score" integer unsigned NOT NULL, "create_time" datetime NOT NULL)';
        await runQuery(db, sql, []);
    } catch (err) {
        if (err.message.indexOf('table scoreboard_api_score already exists') === -1) {
            throw err;
        }
    }
    logger.info('Database initialized.');
    db.close();
}