const express = require('express');
const middle = require('../controllers/index-middle');

const router = express.Router();

router.get('/', middle.readFriendsList);
router.post('/', middle.addFriend);
router.get('/:id', middle.deleteFriend);

module.exports = router;