const express = require('express');
const { postApacheLogs, getLogs, postNgInxLogs, getApacheLogs, getNgInxLogs } = require('../controller/LogRecord');

const router   = express.Router();

router.post('/apacheLogs', postApacheLogs);
router.post('/nginxLogs', postNgInxLogs);
router.get('/getApacheLogs', getApacheLogs)
router.get('/getNgInxLogs', getNgInxLogs)


router.get('/getAllLogs', getLogs);

module.exports = router;