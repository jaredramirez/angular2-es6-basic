import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';

import template from './home.template.html';

@Component({
    selector: 'home',
    template: template,
    directives: [ROUTER_DIRECTIVES, MdToolbar, MdButton]
})
export default class HomeComponent { }
