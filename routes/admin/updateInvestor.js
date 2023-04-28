const express = require('express');
const router = express.Router();
const {updateInvestor} = require('../../controllers/admin/updateInvestors');

router.put('/' , updateInvestor);

module.exports = router;