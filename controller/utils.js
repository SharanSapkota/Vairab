const PIPELINE_FOR_IP = {$group: {_id: "$ip", count: {$sum: 1}}};
const PIPELINE_FOR_PROTOCOL = {$group: {_id: "$protocol", count: {$sum: 1}}};


module.exports = {
    PIPELINE_FOR_IP,
    PIPELINE_FOR_PROTOCOL
}