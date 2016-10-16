// import { ModuleWithProviders }  from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { SelectorComponent } from './selector/selector.component';
// import { RecruiterComponent } from './recruiter/recruiter.component';
// import { ProgrammerComponent } from './programmer/programmer.component';
// import { SomeoneComponent } from './someone/someone.component';

// const appRoutes: Routes = [
//     {
//         path: '',
//         redirectTo: '/selector',
//         pathMatch: 'full'
//     },
//     {
//         path: 'selector',
//         component: SelectorComponent,
//     },
//     {
//         path: 'recruiter',
//         component: RecruiterComponent
//     },
//     {
//         path: 'programmer',
//         component: ProgrammerComponent
//     },
//     {
//         path: 'someone',
//         component: SomeoneComponent
//     }
// ];


// export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { Routes } from '@angular/router';

import { RecruiterRoutes } from './recruiter/index';
import { SelectorRoutes } from './selector/index';

export const routes: Routes = [
  ...RecruiterRoutes,
  ...SelectorRoutes
];