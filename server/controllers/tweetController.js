var Tweets = require('../models/tweets');

 var TweetController = {
    getTweets : function(req, res){;
       return res.status(200).json(Tweets.test());
    }
}

module.exports = TweetController;
