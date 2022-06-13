const fs = require('fs');
const express = require('express');
const mid = require('../controllers/index-middlewares');

const router = express.Router();

router.get('/', mid.readFriendsList);

router.post('/', mid.addFriend);

module.exports = { router };