const express = require("express");
const { Router, application } = require("express");
const router = express.Router();

const createFarmer = require('./farmer/create');
const signinFarmer = require('./farmer/signin');

router.use('/farmer/create', createFarmer)
router.use('/farmer/signin', signinFarmer)

const createInvestor = require('./investor/create');
const signinInvestor = require('./investor/signin');

router.use('/investor/create', createInvestor)
router.use('/investor/signin', signinInvestor)

const createAdmin = require('./admin/create');
const signinAdmin = require('./admin/signin');

router.use('/admin/create', createAdmin)
router.use('/admin/signin', signinAdmin)

const createIco = require('./ico/create');

router.use('/ico/create', createIco)

module.exports = router
