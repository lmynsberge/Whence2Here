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
var flight_1 = require("./flight");
var flight_service_1 = require("./services/flight.service");
var FlightDetailComponent = (function () {
    function FlightDetailComponent(flightService, route, location) {
        this.flightService = flightService;
        this.route = route;
        this.location = location;
    }
    FlightDetailComponent.prototype.ngOnInit = function () {
        // this.route.paramMap
        //   .switchMap((params: ParamMap) =>
        // this.flightService.getFlights(+params.get('id')))
        //   .subscribe(flight => this.flyer = flight);
    };
    FlightDetailComponent.prototype.onSelect = function () {
        this.isSelected = !this.isSelected;
    };
    return FlightDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", flight_1.Flight)
], FlightDetailComponent.prototype, "flight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FlightDetailComponent.prototype, "isSelected", void 0);
FlightDetailComponent = __decorate([
    core_1.Component({
        selector: 'flight-detail',
        template: "\n  <div class=\"flight-details\" *ngIf=\"flight\">\n    <!-- Header of a flight -->\n    <div class=\"flight-header\" [class.selected]=\"isSelected\" >\n      <div \n        (click)=\"onSelect()\">\n        <span class=\"badge\">{{flight.destination}}</span>\n          {{flight.totalPrice}}\n      </div>\n    </div>\n\n    <!-- Content of a flight -->\n    <div class=\"flight-content\" [class.nodisp]=\"!isSelected\">\n      <div class=\"flyers\"\n        *ngFor=\"let flyer of flight.userId\">\n        <div>{{flyer}}</div>\n      </div>\n      <div class=\"prices\"\n        *ngFor=\"let price of flight.userPrice\">\n        <div>{{price}}</div>\n      </div>\n    </div>\n  </div>\n  \n  ",
        styles: ["\n  .flight-details {\n    color: black;\n    display: inline-block;\n    border-radius: 4px;\n    box-shadow: 1px 1px 5px 1px lightgray;\n    background-color: #EEE;\n  }\n  .nodisp {\n    display: none;\n  }\n  .selected {\n    color:white;\n  }\n  div.flight-header {\n    left: 0;\n    height: 1.6em;\n    width: 19em;\n    color: black;\n    margin: 0.5em 0.5em 0 0.5em;\n    cursor: pointer;\n  }\n  div.flight-header.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  div.flight-header:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n  }\n  div.flight-header div {\n    display: inline-block;\n    font-size: small;\n    position: relative;\n  }\n  div .badge {\n    font-style: italic;\n    width: 18em;\n  }\n  div.flight-content {\n    margin: 0 0 0 1.7em;\n    border-radius: 0 0 4px 4px;\n    background-color: #BBD8DC;\n    width: 16.5em;\n    padding: 0.5em;\n  }\n  "]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        router_1.ActivatedRoute,
        common_1.Location])
], FlightDetailComponent);
exports.FlightDetailComponent = FlightDetailComponent;
//# sourceMappingURL=flight-detail.component.js.map