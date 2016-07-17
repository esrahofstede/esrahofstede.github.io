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
var personalia_service_1 = require('./../../shared/personalia.service');
var PersonaliaComponent = (function () {
    function PersonaliaComponent(_router, _personaliaService) {
        this._router = _router;
        this._personaliaService = _personaliaService;
    }
    PersonaliaComponent.prototype.getPersonalia = function () {
        var _this = this;
        this._personaliaService.getPersonalia().then(function (personalia) { return _this.setPersonalia(personalia); });
    };
    PersonaliaComponent.prototype.setPersonalia = function (personalia) {
        this.personalia = personalia;
    };
    PersonaliaComponent.prototype.ngOnInit = function () {
        this.getPersonalia();
    };
    PersonaliaComponent = __decorate([
        core_1.Component({
            selector: 'personalia',
            templateUrl: 'app/recruiter/personalia/personalia.component.html',
            styleUrls: ['app/recruiter/personalia/personalia.component.css'],
            providers: [personalia_service_1.PersonaliaService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, personalia_service_1.PersonaliaService])
    ], PersonaliaComponent);
    return PersonaliaComponent;
}());
exports.PersonaliaComponent = PersonaliaComponent;
//# sourceMappingURL=personalia.component.js.map