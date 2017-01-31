import angular from 'angular';
import { appComponent } from './app.component';
import { appCommonModule } from './common/common.module';

export const AppModule = angular
      .module('app.module', [appCommonModule])
      .component('app', appComponent)
      .name;