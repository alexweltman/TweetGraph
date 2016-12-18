'use strict';
var fs = require('fs');
var errors = require('../errors/errors');
var fetch = require('node-fetch');

class SentimentAnalyzer {

  constructor() {
    this.confFile = 'server/conf/meaningCloud.json';
    this.errors = errors;
    var configurations = this.readConfigurationFromDisk();
  }


  getSentimentForText(text, language) {
    var URI = this.makeURI(text, language);

    return fetch(URI, {
      method: "POST"
    }).then(response => {
      response.json().then(json => {
        if (response.status !== 200) {
          console.log(error)
        } else {
          return this.convertSentimentScore(json.score_tag);
        }
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    });
  }

  convertSentimentScore(scoreTag) {
    var conversions = {
      "P+" : 2,
      "P" : 1,
      "NEU" : 0,
      "NONE" : 0,
      "N" : -1,
      "N+" : -2
    };
    return conversions[scoreTag];
  }

  makeURI(text, language) {
    return this.configurations.uri +
      "?key=" + this.configurations.license_key +
      "&of=json&text=" + text + "&lang=" + language;
  }


  readConfigurationFromDisk() {
    try {
      return JSON.parse(fs.readFileSync(this.confFile, 'utf8'));
    } catch (err) {
      this.errors.addError("Unable to open Meaning Cloud conf file");
      return false;
    }
  }
}

module.exports = new SentimentAnalyzer();
