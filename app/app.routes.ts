import { provideRouter, RouterConfig }  from '@angular/router';

import { SelectorComponent } from './selector/selector.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { SomeoneComponent } from './someone/someone.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/selector',
        pathMatch: 'full'
    },
    {
        path: 'selector',
        component: SelectorComponent,
    },
    {
        path: 'recruiter',
        component: RecruiterComponent
    },
    {
        path: 'programmer',
        component: ProgrammerComponent
    },
    {
        path: 'someone',
        component: SomeoneComponent
    }
];

export const appRouterProviders = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/