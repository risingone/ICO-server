const express = require('express');
const router = express.Router();
const {updateFarmer} = require('../../controllers/admin/updateFarmers');

router.put('/' , updateFarmer);

module.exports = router;