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
var workExperience_service_1 = require('./../../shared/workExperience.service');
var WorkComponent = (function () {
    function WorkComponent(_router, _workService) {
        this._router = _router;
        this._workService = _workService;
    }
    WorkComponent.prototype.getWork = function () {
        var _this = this;
        this._workService.getWork().then(function (workExperiences) { return _this.setWork(workExperiences); });
    };
    WorkComponent.prototype.setWork = function (workExperiences) {
        this.workExperiences = workExperiences;
    };
    WorkComponent.prototype.ngOnInit = function () {
        this.getWork();
    };
    WorkComponent = __decorate([
        core_1.Component({
            selector: 'work',
            templateUrl: 'app/recruiter/work/work.component.html',
            styleUrls: ['app/recruiter/work/work.component.css'],
            providers: [workExperience_service_1.WorkExperienceService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, workExperience_service_1.WorkExperienceService])
    ], WorkComponent);
    return WorkComponent;
}());
exports.WorkComponent = WorkComponent;
//# sourceMappingURL=work.component.js.map