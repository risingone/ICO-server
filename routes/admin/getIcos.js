const express = require('express');
const router = express.Router();
const {getIcos} = require('../../controllers/admin/getIcos');

router.get('/' , getIcos);

module.exports = router;