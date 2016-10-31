var Tweets = require('../models/tweets');

 var TweetController = {
    getTweets : function(req, res){;
       Tweets.test().then(function(response){
         res.status(200).json(response);
       });
    }
}

module.exports = TweetController;
