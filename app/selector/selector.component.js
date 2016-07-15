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
let SelectorComponent = class SelectorComponent {
    constructor(_router) {
        this._router = _router;
        this.title = 'Website van Esra Hofstede';
    }
    gotoRecruiter() {
        this._router.navigate(['recruiter']);
    }
    gotoProgrammer() {
        this._router.navigate(['programmer']);
    }
};
SelectorComponent = __decorate([
    core_1.Component({
        selector: 'selector',
        templateUrl: 'app/selector/selector.component.html',
        styleUrls: ['app/app.component.css']
    }), 
    __metadata('design:paramtypes', [router_1.Router])
], SelectorComponent);
exports.SelectorComponent = SelectorComponent;
//# sourceMappingURL=selector.component.js.map