const express = require('express');
const Joi = require('joi');
const { getScores, addScore } = require('../dao/score_dao');

const router = express.Router();

router.get('/', async (req, res) => {
    const scores = await getScores();
    res.send(scores);
});

router.post('/', async (req, res) => {
    const scoreToBeCreated = {
        name: req.body.name,
        score: req.body.score
    };
    const { error } = validateScore(scoreToBeCreated);
    if (error) {
        res.status(400).send('Invalid request: ' + error.details[0].message);
    }
    const createdScore = await addScore(scoreToBeCreated);
    res.send(createdScore);
});

function validateScore(score) {
    const scoreSchema = {
        name: Joi.string().required().min(1).max(50),
        score: Joi.number().integer().required().min(0).max(1000000000000)
    };
    return Joi.validate(score, scoreSchema);
}

module.exports = router;
