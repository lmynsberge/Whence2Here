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
var flight_service_1 = require("./flight.service");
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
    FlightDetailComponent.prototype.onRemove = function () {
        this.flight = null;
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
        template: "\n  <div class=\"flight-details\" *ngIf=\"flight\">\n    {{flight.price}}\n    {{flight.destination}}\n  </div>\n  \n  ",
        styles: ["\n  \n  "]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService,
        router_1.ActivatedRoute,
        common_1.Location])
], FlightDetailComponent);
exports.FlightDetailComponent = FlightDetailComponent;
//# sourceMappingURL=flight-detail.component.js.map