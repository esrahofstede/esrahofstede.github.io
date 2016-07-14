import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { PersonaliaService } from './../shared/personalia.service';


@Component({
  selector: 'someone',
  template: `
    <p>voor router van recruiter</p>
    <router-outlet></router-outlet>
    <p>na router van recruiter</p>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    PersonaliaService
  ]
})
export class SomeoneComponent {
  
}
