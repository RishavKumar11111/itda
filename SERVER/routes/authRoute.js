const express = require('express');
const router = express.Router();
const authBal = require('../bal/authBal');
const validation = require('../validation/auth/auth.validation');
module.exports = router;

router.post('/signIn', validation.signIn, authBal.signIn);