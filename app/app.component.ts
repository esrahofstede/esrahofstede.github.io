import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { DashboardComponent } from './heroes/dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './heroes/shared/hero.service';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { SomeoneComponent } from './someone/someone.component';
import { SelectorComponent } from './selector/selector.component';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  template: '<div class="container"><router-outlet></router-outlet></div>',
  styleUrls: ['app/reset.css'],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/selector',
    name: 'Selector',
    component: SelectorComponent,
    useAsDefault: true
  },
  {
    path: '/recruiter',
    name: 'Recruiter',
    component: RecruiterComponent
  },
  {
    path: '/programmer',
    name: 'Programmer',
    component: ProgrammerComponent
  },
  {
    path: '/someone',
    name: 'Someone',
    component: SomeoneComponent
  }
])
export class AppComponent {
  title = 'Website van Esra Hofstede';

}
