import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { PersonaliaService } from './../shared/personalia.service';

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
