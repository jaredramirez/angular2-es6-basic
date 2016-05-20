import './shim';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import AppComponent from './components/app.component';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  {provide: LocationStrategy, useClass: PathLocationStrategy}
]);
