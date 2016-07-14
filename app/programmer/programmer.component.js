System.register(['angular2/core', 'angular2/router', './personalia/personalia.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, personalia_component_1;
    var ProgrammerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personalia_component_1_1) {
                personalia_component_1 = personalia_component_1_1;
            }],
        execute: function() {
            ProgrammerComponent = (function () {
                function ProgrammerComponent() {
                    this.title = 'Website van Esra Hofstede';
                }
                ProgrammerComponent = __decorate([
                    core_1.Component({
                        selector: 'programmer',
                        templateUrl: "app/programmer/programmer.component.html",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, personalia_component_1.PersonaliaComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProgrammerComponent);
                return ProgrammerComponent;
            }());
            exports_1("ProgrammerComponent", ProgrammerComponent);
        }
    }
});
//# sourceMappingURL=programmer.component.js.map