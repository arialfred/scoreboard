import axios from 'axios';

const scoreboardApiUrl = 'http://localhost:8000/scoreboard/api/scores';

export async function getScores() {
    const response = await axios.get(scoreboardApiUrl);
    return response;
}

export async function addScore(name, score) {
    const response = await axios.post(scoreboardApiUrl, {
        name,
        score
    });
    return response;
}