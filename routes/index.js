const fs = require('fs');
const express = require('express');
const middle = require('../controllers/index-middle');

const router = express.Router();

router.get('/', middle.readFriendsList);

router.post('/', middle.addFriend);

module.exports = router;