import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated'

@Component({
    selector: 'about',
    template: `<p>about</p>`,
    directives: [ROUTER_DIRECTIVES]
})
export default class AboutComponent {}
