import { Component, OnInit } from '@angular/core';

import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'my-db',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  flights: Flight[] = [];

  constructor(private flightService: FlightService) {};

  ngOnInit(): void {
    this.flightService.getFlightsSlowly()
      .then(flights => this.flights = flights.slice(1, 5));
  }
}
