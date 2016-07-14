System.register(['angular2/core', 'angular2/router', './../../shared/pitch.service'], function(exports_1, context_1) {
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
    var core_1, router_1, pitch_service_1;
    var PitchComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (pitch_service_1_1) {
                pitch_service_1 = pitch_service_1_1;
            }],
        execute: function() {
            PitchComponent = (function () {
                function PitchComponent(_router, _pitchService) {
                    this._router = _router;
                    this._pitchService = _pitchService;
                }
                PitchComponent.prototype.getPitch = function () {
                    var _this = this;
                    this._pitchService.getPitch().then(function (pitch) { return _this.setPitch(pitch); });
                };
                PitchComponent.prototype.setPitch = function (pitch) {
                    this.pitch = pitch;
                };
                PitchComponent.prototype.ngOnInit = function () {
                    this.getPitch();
                };
                PitchComponent = __decorate([
                    core_1.Component({
                        selector: 'pitch',
                        templateUrl: 'app/recruiter/pitch/pitch.component.html',
                        styleUrls: ['app/recruiter/pitch/pitch.component.css'],
                        providers: [pitch_service_1.PitchService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, pitch_service_1.PitchService])
                ], PitchComponent);
                return PitchComponent;
            }());
            exports_1("PitchComponent", PitchComponent);
        }
    }
});
//# sourceMappingURL=pitch.component.js.map