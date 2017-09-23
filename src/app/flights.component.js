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
var flight_service_1 = require("./flight.service");
var FLYERS = [
    { id: 11, name: 'Hannah' },
    { id: 12, name: 'Luke' },
    { id: 13, name: 'Brandon' },
    { id: 14, name: 'Claire' },
];
var FlightsComponent = (function () {
    function FlightsComponent(flightService) {
        this.flightService = flightService;
        this.flyers = FLYERS;
    }
    FlightsComponent.prototype.onSelect = function (flyer) {
        this.selectedFlyer = flyer;
    };
    FlightsComponent.prototype.getFlights = function () {
        var _this = this;
        this.flightService.getFlightsSlowly()
            .then(function (flights) { return _this.flights = flights; });
    };
    FlightsComponent.prototype.ngOnInit = function () {
        this.getFlights();
    };
    return FlightsComponent;
}());
FlightsComponent = __decorate([
    core_1.Component({
        selector: 'my-flights',
        template: "\n  <h2>Friendly Travelers</h2>\n\n  <div>\n    <ul class=\"flyers\">\n      <li\n        [class.selected]=\"flyer === selectedFlyer\"\n        *ngFor=\"let flyer of flyers\"\n        (click)=\"onSelect(flyer)\">\n\n        <span class=\"badge\">{{flyer.id}}</span>\n        {{flyer.name}}\n      </li>\n    </ul>\n  </div>\n\n  <flyer-detail [flyer]=\"selectedFlyer\"></flyer-detail>\n\n  <div>\n    <ul class=\"flyers\">\n      <li\n        *ngFor=\"let flight of flights\">\n        <span class=\"badge\">{{flight.price}}</span>\n        {{flight.destination}}\n      </li>\n    </ul>\n  </div>\n  ",
        styles: ["\n    .selected {\n      color: white;\n      background-color: #DDD !important;\n      left: .1em !important;\n    }\n    .flyers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .flyers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .flyers li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .flyers li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .flyers .text {\n      position: relative;\n      top: -3px;\n    }\n    .flyers .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightsComponent);
exports.FlightsComponent = FlightsComponent;
//# sourceMappingURL=flights.component.js.map