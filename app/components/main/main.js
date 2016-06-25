import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';

import mainRoutes from 'components/main/main.routes';
import mainConstants from 'components/main/main.constants';

const MainModule = angular.module('Main', ['ui.router', 'ngMaterial'])
    .config(mainRoutes)
    .constant('main.constants', mainConstants);

export default MainModule.name;
