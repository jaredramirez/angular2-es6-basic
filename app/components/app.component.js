import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated'

import template from './app.template.html';

import Home from './home/home.component';
import About from './about/about.component';

@Component({
  selector: 'my-app',
  template: template,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {name: 'Home', path: '/home', component: Home, },
  {name: 'About', path: '/about', component: About},
  {path: '/**', redirectTo: ['Home'] }
])
export default class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('init AppComponent');
  }
}
