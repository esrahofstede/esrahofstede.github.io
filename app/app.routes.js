"use strict";
var router_1 = require('@angular/router');
var selector_component_1 = require('./selector/selector.component');
var recruiter_component_1 = require('./recruiter/recruiter.component');
var programmer_component_1 = require('./programmer/programmer.component');
var someone_component_1 = require('./someone/someone.component');
var routes = [
    {
        path: '',
        redirectTo: '/selector',
        pathMatch: 'full'
    },
    {
        path: '/selector',
        component: selector_component_1.SelectorComponent,
    },
    {
        path: '/recruiter',
        component: recruiter_component_1.RecruiterComponent
    },
    {
        path: '/programmer',
        component: programmer_component_1.ProgrammerComponent
    },
    {
        path: '/someone',
        component: someone_component_1.SomeoneComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.routes.js.map