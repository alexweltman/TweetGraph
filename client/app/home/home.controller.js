class HomeController {

  constructor() {

  }

  fetchTweets() {
    fetch('/api/tweets')
    .then(function(response) {
      response.json()
      .then(function(json){
        console.log(json);
      })
      .catch(function(err) {
        console.log("ERROR:", err);
      });
    });
  }
}

export default HomeController;
