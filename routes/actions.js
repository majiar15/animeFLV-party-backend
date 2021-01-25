const express = require('express');
const actions = require('../controller/actionController');

let router = express.Router();

router.get('/pause', actions.pause)

module.exports = router;