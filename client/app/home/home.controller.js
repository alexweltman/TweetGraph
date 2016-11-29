class HomeController {

  static $inject = ["$scope"];
  constructor($scope) {
    "ngInject";
    this.$scope = $scope;
  };
  // constructor() {
  // };

  fetchTweets() {
    fetch('/api/tweets/handle/' + this.input)
    .then((response) => {
      response.json()
      .then((json) => {
        console.log(json);
        this.json = json;
        if (!this.$scope.$$phase) this.$scope.$apply();
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
    });
  };
}

export default HomeController;
