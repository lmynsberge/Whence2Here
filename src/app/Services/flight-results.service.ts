import { DESTINATIONRESULTS } from './../mocks/mock-flight-results';
import { DestinationResult } from './../objects/DestinationResult';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightResultsService {
    getDestinationResults(): Promise<DestinationResult[]> {
      return Promise.resolve(DESTINATIONRESULTS);
    }

}
