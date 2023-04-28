const ApacheSchema = require('../models/ApacheLogs');
const { LOG_FORMAT_REGEX } = require('../utils/ENUMS');
const readline = require('readline');
const fs = require('fs');
const { logObject } = require('../common');
const ApacheLogs = require('../models/ApacheLogs');
const {  PIPELINE_FOR_IP, PIPELINE_FOR_PROTOCOL } = require('./utils');

const logFormatting = (filePath, type, res) => {
    const apacheLn = readline.createInterface({
        input: fs.createReadStream(filePath),
        crlfDelay: Infinity
    });
    apacheLn.on('line', async function(line) {
        const logData = line.match(LOG_FORMAT_REGEX);
        const apacheLogs = logObject(logData, type)
        await ApacheLogs.insertMany([apacheLogs]).then((result, err) => {
            if(result){
                return
            } else {
                return
            }
            })
      });
}

const postApacheLogs = async (req, res) => {
    try {
    await logFormatting('./apache.log', 'apache', res).then(data => res.status(200).json({success: true}))
    } catch(e) {
        console.error(e)
    }

}
const postNgInxLogs = async (req, res) => {
    try {
    await logFormatting('./ngInx.log', 'nginx', res).then(data => res.status(200).json({success: true}))
    } catch(e) {
        console.error(e)
    }

}

const getLogs = async(req, res) => {
const {page, limit} = req.body;
    try {
       await ApacheLogs.find().limit(limit * 1)
       .skip((page - 1) * limit)
       .then((result, err) => {
            if(result) {
                return res.json({success: true, result})
            } else {
                console.log(err)
                return res.status(500).json({success: false, message: "something went wrong!"})
            }
        })
    } catch(e) {
        console.log(e)
        return res.status(500).json({success: false, message: "something went wrong"})

    }
}

const getApacheLogs = async(req, res) => {
        try {
           await ApacheLogs.find({type: 'apache'})
           .then((result, err) => {
                if(result) {
                    return res.json({success: true, result})
                } else {
                    console.log(err)
                    return res.status(500).json({success: false, message: "something went wrong!"})
                }
            })
        } catch(e) {
            console.log(e)
            return res.status(500).json({success: false, message: "something went wrong"})
    
        }
    }
    const getNgInxLogs = async(req, res) => {
        // const {page, limit} = req.body;
            try {
               await ApacheLogs.find({type: 'ngInx'})
               .then((result, err) => {
                    if(result) {
                        return res.json({success: true, result})
                    } else {
                        console.log(err)
                        return res.status(500).json({success: false, message: "something went wrong!"})
                    }
                })
            } catch(e) {
                console.log(e)
                return res.status(500).json({success: false, message: "something went wrong"})
        
            }
        }

    const aggregatedLogs = async (req, res) => {
        try {
            let combinedResult = [];
           const mostActiveIp = await ApacheLogs.aggregate([PIPELINE_FOR_IP])
           combinedResult.push({mostActiveIp})

           const mostCommonProtocol = await ApacheLogs.aggregate([PIPELINE_FOR_PROTOCOL])
           combinedResult.push({mostCommonProtocol})

           const totalLogs = ApacheLogs.countDocuments({type: 'apache'});
           combinedResult.push({totalLogs})

           console.log(combinedResult)
           return res.status(200).json({data: combinedResult})
        } catch(e) {
            console.log(e)
        }
    }

module.exports = {
    postApacheLogs,
    getLogs,
    postNgInxLogs,
    getApacheLogs,
    aggregatedLogs,
    getNgInxLogs
};