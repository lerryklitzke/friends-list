const path = require('path');
const fs = require('fs');
const express = require('express');

const router = express.Router();

let friend = '';
const database = path.join(__dirname, '../', 'database', 'db.json');

router.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'public', 'index.html'));
});

router.post('/', (req, res, next) => {
  friend = { name: req.body.name, age: req.body.age };
  const data = fs.readFileSync(database, { encoding: 'utf8', flag: 'r' });
  const db = JSON.parse(data);
  db.push(friend);
  fs.writeFileSync(database, JSON.stringify(db));
  res.redirect('/');
});

module.exports = { router, friend };