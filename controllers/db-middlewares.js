const path = require('path');

module.exports.dbFile = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'database', 'db.json'));
}