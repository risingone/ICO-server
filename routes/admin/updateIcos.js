const express = require('express');
const router = express.Router();
const {updateIco} = require('../../controllers/admin/updateIcos');

router.put('/' , updateIco);

module.exports = router;