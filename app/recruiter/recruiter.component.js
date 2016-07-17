"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var personalia_component_1 = require('./personalia/personalia.component');
var pitch_component_1 = require('./pitch/pitch.component');
var skills_component_1 = require('./skills/skills.component');
var RecruiterComponent = (function () {
    function RecruiterComponent() {
    }
    RecruiterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/recruiter/recruiter.component.html',
            styleUrls: ['css/reset.css', 'app/recruiter/recruiter.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, personalia_component_1.PersonaliaComponent, pitch_component_1.PitchComponent, skills_component_1.SkillsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RecruiterComponent);
    return RecruiterComponent;
}());
exports.RecruiterComponent = RecruiterComponent;
//# sourceMappingURL=recruiter.component.js.map