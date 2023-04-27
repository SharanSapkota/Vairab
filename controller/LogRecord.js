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
    apacheLn.on('line', async function(line) {
        const logData = line.match(LOG_FORMAT_REGEX);
        // console.log(logData)
        const apacheLogs = logObject(logData, type)
        console.log(apacheLogs)
        await ApacheLogs.insertMany([apacheLogs]).then((result, err) => {
            if(result){
                console.log(result)
                return
                // res.status(200).json({result})
            } else {
                return
                // res.status(400).json({success: false})
            }
            })
        
        // return apacheLogs
      });
}

const postApacheLogs = async (req, res) => {
    // console.log('fldjsafla')
    try {
    await logFormatting('./apache.log', 'apache', res).then(data => res.status(200).json({success: true}))
    } catch(e) {
        console.error(e)
    }

}
const postNgInxLogs = async (req, res) => {
    // console.log('fldjsafla')
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
                console.log(result)
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
    // const {page, limit} = req.body;
        try {
           await ApacheLogs.find({type: 'apache'})
           .then((result, err) => {
                if(result) {
                    console.log(result)
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
                        console.log(result)
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

module.exports = {
    postApacheLogs,
    getLogs,
    postNgInxLogs,
    getApacheLogs,
    getNgInxLogs
};