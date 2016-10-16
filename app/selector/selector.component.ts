import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
    this._router.navigate(['recruiter']);
  }

  gotoProgrammer() {
    this._router.navigate(['programmer']);
  }

}
