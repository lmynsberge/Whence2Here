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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
require("rxjs/add/operator/switchMap");
var flyer_1 = require("./flyer");
var flight_service_1 = require("./flight.service");
var FlyerDetailComponent = (function () {
    function FlyerDetailComponent(flightService, route, location) {
        this.flightService = flightService;
        this.route = route;
        this.location = location;
    }
    FlyerDetailComponent.prototype.ngOnInit = function () {
    };
    FlyerDetailComponent.prototype.onSelect = function () {
        this.isSelected = !this.isSelected;
    };
    FlyerDetailComponent.prototype.onRemove = function () {
        this.flyer = null;
    };
    return FlyerDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", flyer_1.Flyer)
], FlyerDetailComponent.prototype, "flyer", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FlyerDetailComponent.prototype, "isSelected", void 0);
FlyerDetailComponent = __decorate([
    core_1.Component({
        selector: 'flyer-detail',
        template: "\n  <div class=\"flyer-details\" *ngIf=\"flyer\">\n    <!-- Header of a flyer -->\n    <div class=\"flyer-header\" [class.selected]=\"isSelected\" >\n      <div class=\"remove\"\n        (click)=\"onRemove()\">\n        -\n      </div>\n      <div \n        (click)=\"onSelect()\">\n        <span class=\"badge\">{{flyer.startingLocation}}</span>\n          {{flyer.name}}\n      </div>\n      \n    </div>\n\n    <!-- Content of a flyer -->\n    <div class=\"flyer-content\" [class.nodisp]=\"!isSelected\">\n      <div>\n        <input [(ngModel)]=\"flyer.name\" placeholder=\"Name\" />\n      </div>\n      <div>\n        <input [(ngModel)]=\"flyer.startingLocation\" placeholder=\"Starting location\" />\n      </div>\n    </div>\n  </div>\n  \n  ",
        styles: ["\n  .flyer-details {\n    color: black;\n    display: inline-block;\n  }\n  .nodisp {\n    display: none;\n  }\n  .selected {\n    color:white;\n  }\n  div.flyer-header {\n    left: 0;\n    background-color: #EEE;\n    height: 1.6em;\n    border-radius: 4px;\n    width: 19em;\n    color: black;\n    margin: 0.5em 0.5em 0 0.5em;\n    box-shadow: 1px 1px 5px 1px lightgray;\n    cursor: pointer;\n  }\n  div.flyer-header.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  div.flyer-header:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  div.flyer-header div {\n    display: inline-block;\n    font-size: small;\n    position: relative;\n  }\n  div .remove {\n    border-radius: 4px 0 0 4px;\n    width: 1em;\n    background-color: darkred;\n    color: white;\n    height: 1.8em;\n    padding: 0.2em 0 0 0.5em;\n  }\n  div .badge {\n    font-style: italic;\n    width: 18em;\n  }\n  div.flyer-content {\n    margin: 0 0 0 1.7em;\n    border-radius: 0 0 4px 4px;\n    box-shadow: 1px 1px 5px 1px lightgray;\n    background-color: #BBD8DC;\n    width: 16.5em;\n    padding: 0.5em;\n  }\n  "]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        router_1.ActivatedRoute,
        common_1.Location])
], FlyerDetailComponent);
exports.FlyerDetailComponent = FlyerDetailComponent;
//# sourceMappingURL=flyer-detail.component.js.map