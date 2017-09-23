import { Component, OnInit } from '@angular/core';

import { Flyer } from './flyer';
import { Flight} from './flight';
import { FlightService } from './flight.service';

const FLYERS: Flyer[] = [
  { id: 11, name: 'Hannah' },
  { id: 12, name: 'Luke' },
  { id: 13, name: 'Brandon'},
  { id: 14, name: 'Claire'},
]

@Component({
  selector: 'my-flights',
  template: `
  <h2>Friendly Travelers</h2>

  <div>
    <ul class="flyers">
      <li
        [class.selected]="flyer === selectedFlyer"
        *ngFor="let flyer of flyers"
        (click)="onSelect(flyer)">

        <span class="badge">{{flyer.id}}</span>
        {{flyer.name}}
      </li>
    </ul>
  </div>

  <flyer-detail [flyer]="selectedFlyer"></flyer-detail>

  <div>
    <ul class="flyers">
      <li
        *ngFor="let flight of flights">
        <span class="badge">{{flight.price}}</span>
        {{flight.destination}}
      </li>
    </ul>
  </div>
  `,
  styles: [`
    .selected {
      color: white;
      background-color: #DDD !important;
      left: .1em !important;
    }
    .flyers {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .flyers li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .flyers li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .flyers li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .flyers .text {
      position: relative;
      top: -3px;
    }
    .flyers .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]

})
export class FlightsComponent implements OnInit {

  flyers = FLYERS;
  selectedFlyer: Flyer;
  flights: Flight[];
  constructor(private flightService: FlightService) {}

  onSelect(flyer: Flyer): void {
    this.selectedFlyer = flyer;
  }

  getFlights(): void {
    this.flightService.getFlightsSlowly()
      .then(flights => this.flights = flights);
  }

  ngOnInit(): void {
    this.getFlights();
  }
}

