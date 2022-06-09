const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

const friends = '';
const database = path.join(__dirname, '../', 'database', 'db.json');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.post('/', (req, res, next) => {
  friends = { name: req.body.name, age: req.body.age };
  fs.writeFileSync(database, JSON.stringify(friends), { flag: 'a' });
  console.log(friends);
  res.redirect('/');
});

module.exports = { router, friends };