'use strict';

var Tweets = require('../models/tweets/tweets');

 var TweetController = {
    getTweets : function(req, res){
       Tweets.getTweetsForUser("RealDonaldTrump", 20).then(function(response){
         console.log(response);
         let statusCode = Tweets.errors.hasErrors() ? 500 : 200;
         console.log("status code? ", statusCode);
         res.status(statusCode).json(response);
       });
    }
}

module.exports = TweetController;
