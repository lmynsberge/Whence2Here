import { DESTINATIONRESULTS } from './../Mocks/mock-flight-results';
import { DestinationResult } from './../Services/DestinationResult';
import { Injectable } from '@angular/core';

@Injectable()
export class FlightResultsService {
    getDestinationResults(): Promise<DestinationResult[]> {
      return Promise.resolve(DESTINATIONRESULTS);
    }

}
