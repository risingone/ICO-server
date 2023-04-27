const express = require('express');
const router = express.Router();
const {getInvestors} = require('../../controllers/admin/getInvestors');

router.get('/' , getInvestors);

module.exports = router;