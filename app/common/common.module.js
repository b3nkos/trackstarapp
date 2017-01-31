import angular from 'angular';
import { headerModule } from './header/header.module';
import { navModule } from './nav/nav.module';

export const appCommonModule = angular
      .module('app.common.module', [
        headerModule,
        navModule
      ])
      .name;