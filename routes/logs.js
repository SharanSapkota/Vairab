const express = require('express');
const { postApacheLogs } = require('../controller/LogRecord');

const router   = express.Router();

router.post('/apacheLogs', postApacheLogs);

module.exports = router;