"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var flyer_detail_component_1 = require("./flyer-detail.component");
var flight_detail_component_1 = require("./flight-detail.component");
var flights_component_1 = require("./flights.component");
var flight_service_1 = require("./flight.service");
var dashboard_component_1 = require("./dashboard.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'flights',
                    component: flights_component_1.FlightsComponent
                },
                {
                    path: 'flights/:id',
                    component: flight_detail_component_1.FlightDetailComponent
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent
                },
                {
                    path: 'detail/:id',
                    component: flyer_detail_component_1.FlyerDetailComponent
                }
            ])
        ],
        declarations: [app_component_1.AppComponent, flyer_detail_component_1.FlyerDetailComponent, flights_component_1.FlightsComponent, dashboard_component_1.DashboardComponent, flight_detail_component_1.FlightDetailComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [flight_service_1.FlightService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map