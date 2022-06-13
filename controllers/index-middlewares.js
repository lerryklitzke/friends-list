const fs = require('fs');
const path = require('path');

const database = path.join(__dirname, '../', 'database', 'db.json');

module.exports.readFriendsList = (req, res, next) => {
  const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
  const friendsList = JSON.parse(data);
  res.render('index', { friendsList });
}
module.exports.addFriend = (req, res, next) => {
  friend = { id: Math.random().toString(), name: req.body.name, age: req.body.age };
  const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
  const db = JSON.parse(data);
  db.push(friend);
  fs.writeFileSync(database, JSON.stringify(db));
  res.redirect('/');
}
