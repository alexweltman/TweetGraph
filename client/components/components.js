import angular from 'angular';
import Navbar from './navbar/navbar';

let componentModule = angular.module('app.components', [
  Navbar
])

.name;

export default componentModule;
