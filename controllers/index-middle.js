const fs = require('fs');
const path = require('path');

const Friend = require('../models/friend');

module.exports.readFriendsList = (req, res, next) => {
  const friends = Friend.friendsList();
  res.render('index', { friends });
}
module.exports.addFriend = (req, res, next) => {
  const friend = new Friend(req.body.name, req.body.age);
  friend.save();
  res.redirect('/');
}
