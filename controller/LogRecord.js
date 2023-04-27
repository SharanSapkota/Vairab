const ApacheSchema = require('../models/ApacheLogs');
const { LOG_FORMAT_REGEX } = require('../utils/ENUMS');
const readline = require('readline');
const fs = require('fs');
const { logObject } = require('../common');
const ApacheLogs = require('../models/ApacheLogs');

const logFormatting = (filePath, type, res) => {
    const apacheLn = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity
    });
    apacheLn.on('line', function(line) {
        const logData = line.match(LOG_FORMAT_REGEX);
        // console.log(logData)
        const apacheLogs = logObject(logData, type)
        console.log(apacheLogs)
        ApacheLogs.insertMany([apacheLogs]).then((result, err) => {
            if(result){
                console.log(result)
                res.status(200).json({result})
            } else {
                res.status(400).json({success: false})
            }
            })
        
        // return apacheLogs
      });
}

const postApacheLogs = async (req, res) => {
    // console.log('fldjsafla')
    try {
    // const a = await logFormatting('./apache.log', 'apache', res)
    const b = await logFormatting('./ngInx.log', 'nginx', res)

        // const apacheLn = readline.createInterface({
        //     input: fs.createReadStream('./apache.log'),
        //     crlfDelay: Infinity
        // });
        // apacheLn.on('line', function(line) {
        //     const logData = line.match(LOG_FORMAT_REGEX);
        //     const apacheLogs = logObject(logData)
        //     // console.log(apacheLogs)
        //   });
} catch (e) {
    // console.log(e)
}
}

const getLogs = async() => {
    try {
        const 
    }
}

module.exports = {
    postApacheLogs,
};