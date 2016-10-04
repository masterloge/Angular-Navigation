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
/**
 * Created by pedroferreira on 09/08/16.
 */
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Test';
        this.locat = '';
        this.content1 = 1;
        this.content2 = 2;
        this.content3 = 3;
    }
    AppComponent.prototype.clicked = function (value) {
        this.locat = value;
    };
    AppComponent.prototype.activo = function (value) {
        if (value == this.locat) {
            return false;
        }
        return true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n\t<nav>\n    <a href=\"#/a\" (click)=\"clicked(content1)\">A</a>\n    <a href=\"#/b\" (click)=\"clicked(content2)\">B</a>\n    <a href=\"#/c\" (click)=\"clicked(content3)\">C</a>\n\n\t</nav>\n  <hr>\n  <my-select  [hidden]=\"activo(content1)\"></my-select>\n  <my-select2 [hidden]=\"activo(content2)\"></my-select2>\n  <my-select3 [hidden]=\"activo(content3)\"></my-select3>",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map