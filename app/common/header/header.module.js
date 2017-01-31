import angular from 'angular';
import { headerComponent } from './header.component';

export const headerModule = angular
      .module('header.module', [])
      .component('header', headerComponent)
      .name;