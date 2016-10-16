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
var common_1 = require('@angular/common');
var recruiter_component_1 = require('./recruiter.component');
var personalia_component_1 = require('./personalia/personalia.component');
var pitch_component_1 = require('./pitch/pitch.component');
var portfolio_component_1 = require('./portfolio/portfolio.component');
var skills_component_1 = require('./skills/skills.component');
var work_component_1 = require('./work/work.component');
var angular2_masonry_1 = require('angular2-masonry');
var RecruiterModule = (function () {
    function RecruiterModule() {
    }
    RecruiterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, angular2_masonry_1.MasonryModule],
            declarations: [
                recruiter_component_1.RecruiterComponent,
                personalia_component_1.PersonaliaComponent,
                pitch_component_1.PitchComponent,
                portfolio_component_1.PortfolioComponent,
                skills_component_1.SkillsComponent,
                work_component_1.WorkComponent
            ],
            exports: [recruiter_component_1.RecruiterComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RecruiterModule);
    return RecruiterModule;
}());
exports.RecruiterModule = RecruiterModule;
//# sourceMappingURL=recruiter.module.js.map