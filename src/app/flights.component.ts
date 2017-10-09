import { Component, OnInit } from '@angular/core';

import { Flyer } from './flyer';
import { Flight} from './flight';
import { FlightService } from './flight.service';

// const FLYERS: Flyer[] = [
//   { id: 11, name: 'Hannah' },
//   { id: 12, name: 'Luke' },
//   { id: 13, name: 'Brandon'},
//   { id: 14, name: 'Claire'},
// ]

@Component({
  selector: 'my-flights',
  template: `
  <div class="panel-left">
    <h2>Friendly Travelers</h2>

    <input data-provide="datepicker"> | <input data-provide="datepicker"> <input type="button" value="Search" />

    <div class="flyers"
      *ngFor="let flyer of flyers">
      <flyer-detail [flyer]="flyer" [isSelected]="flyer === selectedFlyer"></flyer-detail>
    </div>

    <div class="add"
      (click)="onAdd()">
      <div>+Add Another</div>
    </div>
  </div>

  <div class="panel-right">
    <h2>Flight Results</h2>

    <ul class="flights">
      <li
        *ngFor="let flight of flights">
        <flight-detail [flight]="flight"></flight-detail>
      </li>
    </ul>

  </div>
  `,
  styles: [`
    .flights {
      margin: 0 0 0 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .flights li {
      cursor: pointer;
      left: 0;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .add {
      cursor: pointer;
      left: 0;
      background-color: lightgreen;
      margin: .5em;
      padding: .5em .5em 0 .5em;
      height: 1.6em;
      border-radius: 4px;
      box-shadow: 1px 1px 5px 1px lightgray;
      width: 8em;
      color: darkgreen;
    }
    .panel-left {
      position: absolute;
      left: 0;
      width: 25em;
      padding-left: 2em;
    }
    .panel-right {
      position: absolute;
      left: 25em;
      width: 100%-25em;
      padding-left: 2em;
    }
  `]

})
export class FlightsComponent implements OnInit {

  flyers: Flyer[] = [];
  selectedFlyer: Flyer;
  flights: Flight[];
  constructor(private flightService: FlightService) {
    this.flyers.push(new Flyer());
    this.flyers[0].id = 1;
    this.flyers[0].name = 'You';
    this.flyers[0].startingLocation = '';
    this.selectedFlyer = this.flyers[0];
  }

  onAdd(): void {
    this.flyers.push(new Flyer());
    this.flyers[this.flyers.length - 1].id = 2;
    this.flyers[this.flyers.length - 1].name = 'New Flyer';
    this.flyers[this.flyers.length - 1].startingLocation = '';
    this.selectedFlyer = this.flyers[this.flyers.length - 1];
  }

  getFlights(): void {
    this.flightService.getFlightsSlowly()
      .then(flights => this.flights = flights);
  }

  ngOnInit(): void {
    this.getFlights();
  }
}

