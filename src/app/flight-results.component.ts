import { Component, OnInit } from '@angular/core';

import { DestinationResult } from './Services/DestinationResult';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css'],
})

export class FlightResultsComponent implements OnInit {

  activeDestination: DestinationResult;
  destinations: DestinationResult[] = [];

  constructor(private flightService: FlightService) {};

  ngOnInit(): void {
    this.flightService.getDestinationResults()
        .then(destinations => this.destinations = destinations);
        this.activeDestination = this.destinations[0];
  }

  onSelect(destCode: string): void {
    for (let destination of this.destinations) {
        if (destCode === destination.destination) {
            this.activeDestination = destination;
        }
    }
  }
}
