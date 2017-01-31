import angular from 'angular';
import { navComponent } from './nav.component';

export const navModule = angular
      .module('nav.module', [])
      .component('nav', navComponent)
      .name;