const express = require('express');
const router = express.Router();
const {createInvestor} = require('../../controllers/investor/create');

router.post('/' , createInvestor);

module.exports = router;