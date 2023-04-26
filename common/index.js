const { NOT_DEFINED } = require("../utils/ENUMS");

const logObject = (logData) => {
    const timeStamp = logData && logData?.length && logData[4] ? logData[4] : NOT_DEFINED;
    return {
            ip: logData && logData?.length && logData[1] ? logData[1] : NOT_DEFINED,
            user: logData && logData?.length && logData[2] ? logData[2] : NOT_DEFINED,
            timestamp: new Date(timeStamp),
            method: logData && logData?.length && logData[5] ? logData[5] : NOT_DEFINED,
            path: logData && logData?.length && logData[6] ? logData[6] : NOT_DEFINED,
            protocol: logData && logData?.length && logData[7] ? logData[7] : NOT_DEFINED,
            status:logData && logData?.length && logData[8] ? logData[8] : NOT_DEFINED,
            size: logData && logData?.length && logData[9] ? logData[9] : NOT_DEFINED,
            referer: logData && logData?.length && logData[10] ? logData[10] : NOT_DEFINED,
            userAgent: logData && logData?.length && logData[11] ? logData[11] : NOT_DEFINED,
    }
}

module.exports = { logObject }