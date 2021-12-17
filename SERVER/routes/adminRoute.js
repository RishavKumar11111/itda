const express = require('express');
const router = express.Router();
const adminBal = require('../bal/adminBal');
const validation = require('../validation/admin/admin.validation');
module.exports = router;


router.get('/getAllItdaList', validation.getAllItdaList, adminBal.getAllItdaList);
router.post('/updateItdaDetails/:itdaCode', validation.updateItdaDetails, adminBal.updateItdaDetails);
router.get('/getTargetListOfAllItda', validation.getTargetListOfAllItda, adminBal.getTargetListOfAllItda);
router.post('/setItdaTarget/:itdaCode', validation.setItdaTarget, adminBal.setItdaTarget);