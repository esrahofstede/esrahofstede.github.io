import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { PersonaliaComponent } from './personalia/personalia.component';

@Component({
  selector: 'programmer',
  templateUrl: "app/programmer/programmer.component.html",
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, PersonaliaComponent]
})
export class ProgrammerComponent {
  title = 'Website van Esra Hofstede';
}
