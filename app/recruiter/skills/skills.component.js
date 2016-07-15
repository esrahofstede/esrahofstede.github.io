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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const skills_service_1 = require('./../../shared/skills.service');
let SkillsComponent = class SkillsComponent {
    constructor(_router, _skillsService) {
        this._router = _router;
        this._skillsService = _skillsService;
        this.languagesView = {
            radius: 40,
            strokewidth: 20,
            strokedasharray: function () {
                return this.radius * 2 * 3.14;
            },
            strokedashoffset: function (percentage) {
                return 251.2 - 251.2 * percentage / 100;
            }
        };
        this.straal = 40;
    }
    getWidth(i, skillType) {
        var indicator = this.skills[skillType][i].indication;
        return indicator + "0%";
    }
    getSkills() {
        this._skillsService.getSkills().then(skills => this.setSkills(skills));
    }
    setLanguageView() {
        this.languagesView = {
            radius: 40,
            strokewidth: 20,
            strokedasharray: function () {
                return this.radius * 2 * 3.14;
            },
            strokedashoffset: function (percentage) {
                return 251.2 - 251.2 * percentage / 100;
            }
        };
    }
    setSkills(skills) {
        this.skills = skills;
    }
    ngOnInit() {
        this.getSkills();
    }
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
exports.SkillsComponent = SkillsComponent;
let LanguagesView = {
    radius: 40,
    strokewidth: 20,
    strokedasharray: function () {
        return this.radius * 2 * 3.14;
    },
    strokedashoffset: function (percentage) {
        return 251.2 - 251.2 * percentage / 100;
    }
};
class LanguageSVG {
}
//# sourceMappingURL=skills.component.js.map