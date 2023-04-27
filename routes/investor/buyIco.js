const express = require('express');
const router = express.Router();
const {buyIco} = require('../../controllers/investor/buyIco');

router.patch('/' , buyIco);

module.exports = router;