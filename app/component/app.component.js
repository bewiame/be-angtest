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
var app_component1_1 = require('./app.component1');
var AppComponent = (function () {
    function AppComponent() {
        this.errorCount = 0;
        this.title = 'My test (For)';
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.myHero = this.heroes[0];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setError(5);
    };
    AppComponent.prototype.changeMyHero = function (num) {
        this.myHero = this.heroes[num];
    };
    AppComponent.prototype.setError = function (nbr) {
        this.errorCount = nbr;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [app_component1_1.AppComponent1],
            templateUrl: 'app/component/app.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map