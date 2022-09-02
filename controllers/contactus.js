const rootDir = require('../util/path');
const path = require('path');


module.exports.contact= (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
  }
module.exports.success=(req, res, next) => {
    res.send(`<h1>Form successfuly filled</h1>`);
  }