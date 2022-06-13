const express = require('express');
const router = express.Router();

const mid = require('../controllers/db-middlewares')

router.get('/api/db/', mid.dbFile);

module.exports = router;
