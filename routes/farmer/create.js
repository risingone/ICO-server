const express = require('express');
const router = express.Router();
const {createFarmer} = require('../../controllers/farmer/create');

router.post('/' , createFarmer);

module.exports = router;