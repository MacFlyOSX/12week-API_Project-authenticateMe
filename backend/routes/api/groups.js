const express = require('express');
const { Group } = require('../../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
    const groups = await Group.findAll();
    res.json(groups);
});

router.post('/', async (req, res) => {
    const {user} = req;
    const {id} = user.toSafeObject();
    const {name, about, type, private, city, state} = req.body;
    const newGroup = await Group.create({
        organizerId: id,
        name,
        about,
        type,
        private,
        city,
        state
    });
    res.json(newGroup);
})

module.exports = router;
