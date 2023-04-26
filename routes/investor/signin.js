const express = require('express');
const router = express.Router();
const {signin} = require('../../controllers/investor/signin');

router.post('/' , signin);

module.exports = router;