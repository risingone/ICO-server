const express = require('express');
const router = express.Router();
const {createIco} = require('../../controllers/ico/create');

router.post('/' , createIco);

module.exports = router;