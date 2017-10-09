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
var flyer_1 = require("./flyer");
var flight_service_1 = require("./flight.service");
// const FLYERS: Flyer[] = [
//   { id: 11, name: 'Hannah' },
//   { id: 12, name: 'Luke' },
//   { id: 13, name: 'Brandon'},
//   { id: 14, name: 'Claire'},
// ]
var FlightsComponent = (function () {
    function FlightsComponent(flightService) {
        this.flightService = flightService;
        this.flyers = [];
        this.flyers.push(new flyer_1.Flyer());
        this.flyers[0].id = 1;
        this.flyers[0].name = 'You';
        this.flyers[0].startingLocation = '';
        this.selectedFlyer = this.flyers[0];
    }
    FlightsComponent.prototype.onAdd = function () {
        this.flyers.push(new flyer_1.Flyer());
        this.flyers[this.flyers.length - 1].id = 2;
        this.flyers[this.flyers.length - 1].name = 'New Flyer';
        this.flyers[this.flyers.length - 1].startingLocation = '';
        this.selectedFlyer = this.flyers[this.flyers.length - 1];
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
        template: "\n  <div class=\"panel-left\">\n    <h2>Friendly Travelers</h2>\n\n    <input data-provide=\"datepicker\"> | <input data-provide=\"datepicker\"> <input type=\"button\" value=\"Search\" />\n\n    <div class=\"flyers\"\n      *ngFor=\"let flyer of flyers\">\n      <flyer-detail [flyer]=\"flyer\" [isSelected]=\"flyer === selectedFlyer\"></flyer-detail>\n    </div>\n\n    <div class=\"add\"\n      (click)=\"onAdd()\">\n      <div>+Add Another</div>\n    </div>\n  </div>\n\n  <div class=\"panel-right\">\n    <h2>Flight Results</h2>\n\n    <ul class=\"flights\">\n      <li\n        *ngFor=\"let flight of flights\">\n        <flight-detail [flight]=\"flight\"></flight-detail>\n      </li>\n    </ul>\n\n  </div>\n  ",
        styles: ["\n    .flights {\n      margin: 0 0 0 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .flights li {\n      cursor: pointer;\n      left: 0;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .add {\n      cursor: pointer;\n      left: 0;\n      background-color: lightgreen;\n      margin: .5em;\n      padding: .5em .5em 0 .5em;\n      height: 1.6em;\n      border-radius: 4px;\n      box-shadow: 1px 1px 5px 1px lightgray;\n      width: 8em;\n      color: darkgreen;\n    }\n    .panel-left {\n      position: absolute;\n      left: 0;\n      width: 25em;\n      padding-left: 2em;\n    }\n    .panel-right {\n      position: absolute;\n      left: 25em;\n      width: 100%-25em;\n      padding-left: 2em;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [flight_service_1.FlightService])
], FlightsComponent);
exports.FlightsComponent = FlightsComponent;
//# sourceMappingURL=flights.component.js.map