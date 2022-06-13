const express = require('express');
const router = express.Router();

const middle = require('../controllers/error-middle');

router.use(middle.error);

module.exports = router;