import angular from 'angular';

import config from 'app.config';
import routeConfig from 'app.routes';

import mainModule from 'components/main/main';

angular.module('App', ['ui.router', 'ngMaterial', mainModule])
    .config(config)
    .config(routeConfig);
