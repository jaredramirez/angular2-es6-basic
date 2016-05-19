import './shim';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core'
import {ROUTER_PROVIDERS, PLATFORM_DIRECTIVES, ROUTER_DIRECTIVES} from '@angular/router-deprecated'
import AppComponent from './components/app.component';

bootstrap(AppComponent,
  [
    ROUTER_PROVIDERS/*,
    provide(PLATFORM_DIRECTIVES, {useValue: [ROUTER_DIRECTIVES], multi: true})*/
  ]
);
