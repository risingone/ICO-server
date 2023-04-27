const express = require('express');
const router = express.Router();
const {getFarmers} = require('../../controllers/admin/getFarmers');

router.get('/' , getFarmers);

module.exports = router;