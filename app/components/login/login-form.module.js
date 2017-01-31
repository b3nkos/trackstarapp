import angular from 'angular';
import loginFormComponent from './login-form.component';

const loginFormModule = angular
      .module('login-form.module', [])
      component('login-form', loginFormComponent)
      .name;