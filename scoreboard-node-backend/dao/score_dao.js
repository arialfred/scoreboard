const { openConnection, runSelectQuery, runQuery } = require('../util/sqlite3');

exports.getScores = async function getScores() {
    const db = await openConnection();
    const rows = await runSelectQuery(db, 'SELECT id, name, score, create_time FROM scoreboard_api_score', []);
    const scores = [];
    rows.forEach((row) => {
        scores.push({
            id: row.id,
            name: row.name,
            score: row.score,
            create_time: row.create_time
        });
    });
    db.close();
    return scores;
};

async function getScoreById(id) {
    const db = await openConnection();
    const rows = await runSelectQuery(db, 'SELECT id, name, score, create_time FROM scoreboard_api_score WHERE id = ?', [id]);
    let score = null;
    if (rows.length === 1) {
        const row = rows[0];
        score = {
            id: row.id,
            name: row.name,
            score: row.score,
            create_time: row.create_time
        }
    }
    return score;
}

exports.addScore = async function addScore(score) {
    const db = await openConnection();
    const id = await runQuery(db, 'INSERT INTO scoreboard_api_score(name, score, create_time) VALUES(?, ?, datetime())', [score.name, score.score]);
    db.close();
    return await getScoreById(id);
};
