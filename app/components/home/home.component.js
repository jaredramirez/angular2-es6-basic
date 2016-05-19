import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({
    selector: 'home',
    template: `<p>home</p>`,
    directives: [ROUTER_DIRECTIVES]
})
export default class HomeComponent { }