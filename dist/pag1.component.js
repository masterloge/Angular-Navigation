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
var pag4_component_1 = require('./pag4.component');
var navigation_service_1 = require('./navigation.service');
var Pag1Component = (function () {
    function Pag1Component(compomentFactoryResolver, navigationservice) {
        this.compomentFactoryResolver = compomentFactoryResolver;
        this.navigationservice = navigationservice;
        this.ActiveStack = "inicial";
        navigationservice.ActiveStack = this.ActiveStack;
    }
    Pag1Component.prototype.onclicked = function () {
        var _this = this;
        var newpageCompomentFactory = this.compomentFactoryResolver.resolveComponentFactory(pag4_component_1.Pag4Component);
        var newpagedialogCompomentRef = this.newpages.createComponent(newpageCompomentFactory);
        this.navigationservice.addback(newpagedialogCompomentRef.instance.active);
        this.navigationservice.ActiveStack = newpagedialogCompomentRef.instance.active;
        newpagedialogCompomentRef.instance.close.subscribe(function () {
            newpagedialogCompomentRef.destroy();
            _this.navigationservice.ActiveStack = _this.navigationservice.back[newpagedialogCompomentRef.instance.active];
        });
    };
    Pag1Component.prototype.esconder = function () {
        return this.navigationservice.isHidden(this.ActiveStack);
    };
    __decorate([
        core_1.ViewChild('newpages', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', core_1.ViewContainerRef)
    ], Pag1Component.prototype, "newpages", void 0);
    Pag1Component = __decorate([
        core_1.Component({
            selector: 'my-select',
            templateUrl: 'app/pag1.component.html',
        }), 
        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver, navigation_service_1.NavigationService])
    ], Pag1Component);
    return Pag1Component;
}());
exports.Pag1Component = Pag1Component;
//# sourceMappingURL=pag1.component.js.map