import { Injectable } from '@angular/core';

import { Flight } from './../flight';
import { FLIGHTS } from './../mock-flights';
import { DESTINATIONRESULTS } from './../mocks/mock-flight-results';
import { DestinationResult } from './../objects/DestinationResult';

@Injectable()
export class FlightService {
    getFlights(): Promise<Flight[]> {
      return Promise.resolve(FLIGHTS);
    }

    getFlightsSlowly(): Promise<Flight[]> {
      // make some delay
      return new Promise(resolve => {
        setTimeout(() => resolve(this.getFlights()), 2000);
      });
    }


    getDestinationResults(): Promise<DestinationResult[]> {
      return Promise.resolve(DESTINATIONRESULTS);
    }

}
