const express = require('express');
const { postApacheLogs, getLogs, postNgInxLogs, getApacheLogs, getNgInxLogs } = require('../controller/LogRecord');
const { auth } = require('../middleware/auth');

const router   = express.Router();

router.post('/apacheLogs',  postApacheLogs);
router.post('/nginxLogs', postNgInxLogs);
router.get('/getApacheLogs', auth, getApacheLogs)
router.get('/getNgInxLogs', getNgInxLogs)


router.get('/getAllLogs',auth, getLogs);

module.exports = router;