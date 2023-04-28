const express = require('express');
const router = express.Router();
const {buyIco} = require('../../controllers/investor/buyIco');

router.put('/' , buyIco);

module.exports = router;