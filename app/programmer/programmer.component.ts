import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

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
