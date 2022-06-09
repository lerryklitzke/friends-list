const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/api/db', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'database', 'db.json'));
});

module.exports = router;
