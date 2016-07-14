System.register(['angular2/core', 'angular2/router', './personalia/personalia.component', './pitch/pitch.component', './skills/skills.component'], function(exports_1, context_1) {
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
    var core_1, router_1, personalia_component_1, pitch_component_1, skills_component_1;
    var RecruiterComponent;
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
            },
            function (pitch_component_1_1) {
                pitch_component_1 = pitch_component_1_1;
            },
            function (skills_component_1_1) {
                skills_component_1 = skills_component_1_1;
            }],
        execute: function() {
            RecruiterComponent = (function () {
                function RecruiterComponent() {
                }
                RecruiterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/recruiter/recruiter.component.html',
                        styleUrls: ['app/reset.css', 'app/recruiter/recruiter.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, personalia_component_1.PersonaliaComponent, pitch_component_1.PitchComponent, skills_component_1.SkillsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], RecruiterComponent);
                return RecruiterComponent;
            }());
            exports_1("RecruiterComponent", RecruiterComponent);
        }
    }
});
//# sourceMappingURL=recruiter.component.js.map