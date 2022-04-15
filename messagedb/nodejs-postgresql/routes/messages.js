var express = require('express');
var router = express.Router();

const messagesController = require('../controllers/messages');
router.post('/savedata', messagesController.postSavedata);

module.exports = router;
