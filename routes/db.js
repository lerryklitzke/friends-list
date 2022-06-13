const express = require('express');
const router = express.Router();

const middle = require('../controllers/db-middle')

router.get('/api/db/', middle.dbFile);

module.exports = router;
