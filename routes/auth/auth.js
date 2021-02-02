const express = require('express');
const auth = require('../../controller/SalaController');

let router = express.Router();

router.post('/crear/sala', auth.crear)
router.post('/entrar/sala', auth.entrar)
module.exports = router;