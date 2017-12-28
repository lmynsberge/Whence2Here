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
var DestinationResult_1 = require("./Services/DestinationResult");
var FlightResultComponent = (function () {
    function FlightResultComponent() {
    }
    FlightResultComponent.prototype.ngOnInit = function () { };
    return FlightResultComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", DestinationResult_1.DestinationResult)
], FlightResultComponent.prototype, "dest", void 0);
FlightResultComponent = __decorate([
    core_1.Component({
        selector: 'flight-result',
        templateUrl: './flight-result.component.html',
        styleUrls: ['./flight-result.component.css'],
    }),
    __metadata("design:paramtypes", [])
], FlightResultComponent);
exports.FlightResultComponent = FlightResultComponent;
//# sourceMappingURL=flight-result.component.js.map