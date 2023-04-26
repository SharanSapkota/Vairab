const readline = require('readline');
const fs = require('fs');
const apacheLog = require('../logs/apache.log')
const ngInxLog = require('../logs/nginx.log');
const { logObject } = require('../common');

const apacheLn = readline.createInterface({
    input: fs.createReadStream('./apache.log'),
    crlfDelay: Infinity
});
apacheLn.on('line', function(line) {
    const logData = line.match(/^(\S+) (\S+) (\S+) \[([\w:/]+\s[+\-]\d{4})\] "(\S+) (\S+) (\S+)" (\d{3}) (\S+) "(\S+)" "([^"]+)"$/);
    const apacheLogs = logObject(logData)
  });
// console.log(apacheLn)

// const ngInx = readline.createInterface({
//     input: fs.createReadStream(ngInxLog),
//     crlfDelay: Infinity
// });

module.exports = {
    apacheLn,
    // ngInx
};

  