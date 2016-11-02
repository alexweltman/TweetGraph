'use strict';
var Twit = require('twit');
var fs = require('fs');
var errors = require('../errors/errors');

class Tweets {

  constructor() {
    this.errors = [];
    this.userName = "Test";
    this.confFile = 'server/conf/twitter.json';
    this.errors = errors;

    var accountConfiguration = this.readConfigurationFromDisk();
    if (accountConfiguration) {
      this.twit = new Twit(accountConfiguration);
    }
  }

  getTweetsForUser(twitterHandle, maxTweets) {
    maxTweets = maxTweets || 100;
    if (!this.errors.hasErrors()) {
      return this.twit.get(
        'statuses/user_timeline', {
          screen_name: twitterHandle,
          count: maxTweets
        },
        (err, data, response) => {
          if (err) {
            this.errors.addError("Unable to retrieve tweets for user ", twitterHandle);
          }
          return data;
        }
      );
    } else {
      return new Promise((resolve, reject) => {
        resolve(this.errors.formatResponse());
      });
    }
  }

  readConfigurationFromDisk() {
    try {
      return JSON.parse(fs.readFileSync(this.confFile, 'utf8'));
    } catch (err) {
      this.errors.addError("Unable to open Twitter conf file");
      return false;
    }
  }
}

module.exports = new Tweets();
