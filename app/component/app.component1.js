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
var app_component2_1 = require('./app.component2');
var AppComponent1 = (function () {
    function AppComponent1() {
    }
    AppComponent1 = __decorate([
        core_1.Component({
            selector: 'my-app1',
            directives: [app_component2_1.AppComponent2],
            templateUrl: 'app/component/app.component1.html',
            styleUrls: ['app/component/app.component1.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent1);
    return AppComponent1;
}());
exports.AppComponent1 = AppComponent1;
//# sourceMappingURL=app.component1.js.map