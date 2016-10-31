'use strict';
var Twit = require('twit');
var fs = require('fs');

class Tweets {

  constructor() {
    this.userName = "Test";
    this.confFile = 'server/conf/twitter.json';

    var accountConfiguration = this.readConfigurationFromDisk();

    this.twit = new Twit(accountConfiguration);
  }

  test() {
    return this.twit.get(
      'statuses/user_timeline', {
        screen_name: 'AlexNeverTweets',
        count: 100
      },
      function(err, data, response) {
        return data;
      }
    );
  }

  readConfigurationFromDisk() {
    return JSON.parse(fs.readFileSync(this.confFile, 'utf8'));
  }
}

module.exports = new Tweets();
