const express = require('express');
const router = express.Router();
const {signin} = require('../../controllers/farmer/signin');

router.post('/' , signin);

module.exports = router;