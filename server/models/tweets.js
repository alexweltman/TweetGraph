'use strict';
var Twit = require('twit')

class Tweets {

  constructor() {
    this.userName = "Test";
    this.twit = new Twit({
      consumer_key:         'LsUHxv1q5LDoslLdfVeGc91bt',
      consumer_secret:      'HOxvvdEvMsaxnrQu16OlZmetkkiIIgZean5tQcuGGgiDnEj6H9',
      access_token:         '23330597-YLuO0w7OIAGEDt47uRZc0Gh00q08VKzyPErQgKuMd',
      access_token_secret:  'AjhITJvgQZu8gNzgaDUlccHTNXNcyRVpaDXYFGfDvY5gn'
    })
  }

  test() {
    this.twit.get(
      'search/tweets', {
        q: 'banana since:2011-07-11',
        count: 100
      },
      function(err, data, response) {
        console.log(data)
      }
    );
    return ({'fake' : 'data'})
  }

}

module.exports = new Tweets();
