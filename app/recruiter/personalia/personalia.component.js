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
const personalia_service_1 = require('./../../shared/personalia.service');
let PersonaliaComponent = class PersonaliaComponent {
    constructor(_router, _personaliaService) {
        this._router = _router;
        this._personaliaService = _personaliaService;
    }
    getPersonalia() {
        this._personaliaService.getPersonalia().then(personalia => this.setPersonalia(personalia));
    }
    setPersonalia(personalia) {
        this.personalia = personalia;
    }
    ngOnInit() {
        this.getPersonalia();
    }
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
exports.PersonaliaComponent = PersonaliaComponent;
//# sourceMappingURL=personalia.component.js.map