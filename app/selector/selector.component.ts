import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Router } from 'angular2/router';

import { PersonaliaService } from './../shared/personalia.service';
// import { PersonaliaComponent } from './personalia/personalia.component';


@Component({
  selector: 'selector',
  templateUrl: 'app/selector/selector.component.html',
  styleUrls: ['app/app.component.css']
})
export class SelectorComponent {
    title = 'Website van Esra Hofstede';
    constructor(
      private _router: Router) { }

  gotoRecruiter() {
    this._router.navigate(['Recruiter']);
  }

  gotoProgrammer() {
    this._router.navigate(['Programmer']);
  }

}
