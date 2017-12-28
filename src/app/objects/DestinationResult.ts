import {FlyerFlightResult} from './FlyerFlightResult';

export class DestinationResult {
    id: number;
    destination: string;
    flyerFlightResult: FlyerFlightResult[];
    firstArrive: number;
    lastArrive: number;
    firstDepart: number;
    lastDepart: number;
    totalCost: number;
}
