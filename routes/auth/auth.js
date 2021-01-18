const express = require('express');
const auth = require('../../controller/auth/authController');

let router = express.Router();

router.post('/crear/sala', auth.crear)

module.exports = router;