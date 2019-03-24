const sqlite3 = require('sqlite3').verbose();
const config = require('config');

exports.openConnection = function openConnection() {
    return new Promise(function(resolve, reject) {
        const db = new sqlite3.Database(config.get('database'), (err) => {
            if (err) {
                reject(err);
            }
            resolve(db);
        });
    });
}

exports.runSelectQuery = function runSelectQuery(db, sql, data) {
    return new Promise(function(resolve, reject) {
        db.all(sql, data, (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
}

exports.runQuery = function runQuery(db, sql, data) {
    return new Promise(function(resolve, reject) {
        db.run(sql, data, function(err, rows) {
            if (err) {
                reject(err);
            }
            resolve(this.lastID);
        });
    });
}