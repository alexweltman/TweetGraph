var express = require('express');
var tweetCtrl = require('./controllers/tweetController');

var router = express.Router();

router.route('/tweets/:searchType/:term').get(tweetCtrl.getTweets);

module.exports = router;
