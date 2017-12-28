"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var mock_flights_1 = require("./mock-flights");
var mock_flight_results_1 = require("./Mocks/mock-flight-results");
var FlightService = (function () {
    function FlightService() {
    }
    FlightService.prototype.getFlights = function () {
        return Promise.resolve(mock_flights_1.FLIGHTS);
    };
    FlightService.prototype.getFlightsSlowly = function () {
        var _this = this;
        // make some delay
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getFlights()); }, 2000);
        });
    };
    FlightService.prototype.getDestinationResults = function () {
        return Promise.resolve(mock_flight_results_1.DESTINATIONRESULTS);
    };
    return FlightService;
}());
FlightService = __decorate([
    core_1.Injectable()
], FlightService);
exports.FlightService = FlightService;
//# sourceMappingURL=flight.service.js.map