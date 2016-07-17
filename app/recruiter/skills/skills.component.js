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
var skills_service_1 = require('./../../shared/skills.service');
var SkillsComponent = (function () {
    function SkillsComponent(_router, _skillsService) {
        this._router = _router;
        this._skillsService = _skillsService;
        this.languagesView = {
            radius: 80,
            strokewidth: 10,
            strokedasharray: 80 * 2 * 3.14 //radius * perimeter of circle
        };
    }
    SkillsComponent.prototype.getWidth = function (i, skillType) {
        var indicator = this.skills[skillType][i].indication;
        return indicator + "0%";
    };
    SkillsComponent.prototype.getSkills = function () {
        var _this = this;
        this._skillsService.getSkills().then(function (skills) { return _this.setSkills(skills); });
    };
    SkillsComponent.prototype.setSkills = function (skills) {
        this.skills = skills;
    };
    SkillsComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    SkillsComponent = __decorate([
        core_1.Component({
            selector: 'skills',
            templateUrl: 'app/recruiter/skills/skills.component.html',
            styleUrls: ['app/recruiter/skills/skills.component.css'],
            providers: [skills_service_1.SkillsService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, skills_service_1.SkillsService])
    ], SkillsComponent);
    return SkillsComponent;
}());
exports.SkillsComponent = SkillsComponent;
var LanguageSVG = (function () {
    function LanguageSVG() {
    }
    return LanguageSVG;
}());
//# sourceMappingURL=skills.component.js.map