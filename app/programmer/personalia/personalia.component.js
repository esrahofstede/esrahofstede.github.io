System.register(['angular2/core', 'angular2/router', './../../shared/personalia.service'], function(exports_1, context_1) {
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
    var core_1, router_1, personalia_service_1;
    var PersonaliaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (personalia_service_1_1) {
                personalia_service_1 = personalia_service_1_1;
            }],
        execute: function() {
            PersonaliaComponent = (function () {
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
                PersonaliaComponent.prototype.onSelect = function (personalia) { this.personalia = personalia; };
                PersonaliaComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.personalia.name }]);
                };
                PersonaliaComponent = __decorate([
                    core_1.Component({
                        selector: 'personalia',
                        templateUrl: 'app/programmer/personalia/personalia.component.html',
                        styleUrls: ['app/programmer/personalia/personalia.component.css'],
                        providers: [personalia_service_1.PersonaliaService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, personalia_service_1.PersonaliaService])
                ], PersonaliaComponent);
                return PersonaliaComponent;
            }());
            exports_1("PersonaliaComponent", PersonaliaComponent);
        }
    }
});
//# sourceMappingURL=personalia.component.js.map