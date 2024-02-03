exports.name = '/images/nsfw';
exports.index = async(req, res, next) => {
    var data = require('fs-extra').readFileSync(__dirname + '/data/txt/nsfw.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({"Author":"duy buff bẩn","url":`${link}`});
};