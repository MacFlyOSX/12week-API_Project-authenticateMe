const express = require('express');
const { Group } = require('../../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
    const groups = await Group.findAll();
    res.json(groups);
})

module.exports = router;
