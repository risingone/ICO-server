const express = require('express');
const router = express.Router();
const {createAdmin} = require('../../controllers/admin/create');

router.post('/' , createAdmin);

module.exports = router;