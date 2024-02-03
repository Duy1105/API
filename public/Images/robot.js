exports.name = '/images/robot';
exports.index = async(req, res, next) => {
    const fs = require('fs-extra');
    try {
        const girl = require('./data/json/robot.json');
        var image = girl[Math.floor(Math.random() * girl.length)].trim();
        res.jsonp({
            url: image,
            count: girl.length,
            author: 'duy buff bẩn'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}