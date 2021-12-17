const express = require('express');
const router = express.Router();
const itdaBal = require('../bal/itdaBal');
const validation = require('../validation/itda/itda.validation');
module.exports = router;

// FIXME: Change UserID from Params to Session (Get UserID from session)
router.get('/getPSDDistrictName/:userId', validation.getPSDDistrictName, itdaBal.getPSDDistrictName);
router.get('/getBlockList/:userId', itdaBal.getBlockList);
router.get('/getGPList/:blockCode', itdaBal.getGPList);
router.get('/getVillageList/:gpCode', itdaBal.getVillageList);
router.get('/getRevenueDistrictCode/:userId', itdaBal.getRevenueDistrictCode);
