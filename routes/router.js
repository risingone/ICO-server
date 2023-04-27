const express = require("express");
const { Router, application } = require("express");
const router = express.Router();

const createFarmer = require('./farmer/create');
const signinFarmer = require('./farmer/signin');

router.use('/farmer/create', createFarmer)
router.use('/farmer/signin', signinFarmer)

const createInvestor = require('./investor/create');
const signinInvestor = require('./investor/signin');
const buyIco = require('./investor/buyIco');

router.use('/investor/create', createInvestor)
router.use('/investor/signin', signinInvestor)
router.use('/investor/buyIco', buyIco)

const createAdmin = require('./admin/create');
const signinAdmin = require('./admin/signin');
const getFarmers = require('./admin/getFarmers');

router.use('/admin/create', createAdmin)
router.use('/admin/signin', signinAdmin)
router.use('/admin/getFarmers', getFarmers)

const createIco = require('./ico/create');

router.use('/ico/create', createIco)

module.exports = router
