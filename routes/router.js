const express = require("express");
const { Router, application } = require("express");
const router = express.Router();

// farmer
const createFarmer = require('./farmer/create');
const signinFarmer = require('./farmer/signin');

router.use('/farmer/create', createFarmer)
router.use('/farmer/signin', signinFarmer)

// investor
const createInvestor = require('./investor/create');
const signinInvestor = require('./investor/signin');
const buyIco = require('./investor/buyIco');

router.use('/investor/create', createInvestor)
router.use('/investor/signin', signinInvestor)
router.use('/investor/buyIco', buyIco)

// admin
const createAdmin = require('./admin/create');
const signinAdmin = require('./admin/signin');
const getFarmers = require('./admin/getFarmers');
const getIcos = require('./admin/getIcos');
const getInvestors = require('./admin/getInvestors');
const updatedInvestor = require('./admin/updateInvestor');
const updatedIcos = require('./admin/updateIcos');
const updatedFarmer = require('./admin/updateFarmer')

router.use('/admin/create', createAdmin)
router.use('/admin/signin', signinAdmin)
router.use('/admin/getFarmers', getFarmers)
router.use('/admin/getIcos', getIcos)
router.use('/admin/getInvestors', getInvestors)
router.use('/admin/updateInvestor', updatedInvestor)
router.use('/admin/updateIco', updatedIcos)
router.use('/admin/updateFarmer', updatedFarmer)

// ico
const createIco = require('./ico/create');
const ico = require("../models/ico_model");

router.use('/ico/create', createIco)

module.exports = router
