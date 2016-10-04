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
var navigation_service_1 = require('./navigation.service');
var Pag4Component = (function () {
    function Pag4Component(compomentFactoryResolver, navigationservice) {
        this.compomentFactoryResolver = compomentFactoryResolver;
        this.navigationservice = navigationservice;
        this.close = new core_1.EventEmitter();
        this.num = 0;
        this.active = "a" + this.navigationservice.id;
        this.num = this.navigationservice.id + 1;
        this.navigationservice.id = this.num;
    }
    Pag4Component.prototype.onclicked = function () {
        var _this = this;
        var newpageCompomentFactory = this.compomentFactoryResolver.resolveComponentFactory(Pag4Component);
        var newpagedialogCompomentRef = this.newpages.createComponent(newpageCompomentFactory);
        this.navigationservice.addback(newpagedialogCompomentRef.instance.active);
        this.navigationservice.ActiveStack = newpagedialogCompomentRef.instance.active;
        newpagedialogCompomentRef.instance.close.subscribe(function () {
            newpagedialogCompomentRef.destroy();
            _this.navigationservice.ActiveStack = _this.navigationservice.back[newpagedialogCompomentRef.instance.active];
        });
    };
    Pag4Component.prototype.onClickedExit = function () {
        this.close.emit('event');
    };
    Pag4Component.prototype.esconder = function () {
        return this.navigationservice.isHidden(this.active);
    };
    __decorate([
        core_1.ViewChild('newpages', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], Pag4Component.prototype, "newpages", void 0);
    Pag4Component = __decorate([
        core_1.Component({
            selector: 'my-select4',
            template: "\n    <div [hidden]=\"esconder()\">\n    {{active}}\n    <button (click)=\"onClickedExit()\"> Back </button>\n\t<br>\n\t<input type=\"text\" name=\"\">\n\t<br>\n\t<button (click)=\"onclicked()\">Clica2</button>\n\t</div>\n\t<div #newpages></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, navigation_service_1.NavigationService])
    ], Pag4Component);
    return Pag4Component;
}());
exports.Pag4Component = Pag4Component;
//# sourceMappingURL=pag4.component.js.map