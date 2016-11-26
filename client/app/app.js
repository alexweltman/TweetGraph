import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Home from './home/home';
import About from './about/about';
import Components from '../components/components';
import AppComponent from './app.component';
import 'normalize.css';
window.$ = window.jQuery = require('jquery');
require('bootstrap');

angular.module('app', [
    uiRouter,
    Home,
    About,
    Components
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
