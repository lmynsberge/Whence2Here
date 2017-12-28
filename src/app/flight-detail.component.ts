import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-detail',
  template: `
  <div class="flight-details" *ngIf="flight">
    <!-- Header of a flight -->
    <div class="flight-header" [class.selected]="isSelected" >
      <div 
        (click)="onSelect()">
        <span class="badge">{{flight.destination}}</span>
          {{flight.totalPrice}}
      </div>
    </div>

    <!-- Content of a flight -->
    <div class="flight-content" [class.nodisp]="!isSelected">
      <div class="flyers"
        *ngFor="let flyer of flight.userId">
        <div>{{flyer}}</div>
      </div>
      <div class="prices"
        *ngFor="let price of flight.userPrice">
        <div>{{price}}</div>
      </div>
    </div>
  </div>
  
  `,
  styles: [`
  .flight-details {
    color: black;
    display: inline-block;
    border-radius: 4px;
    box-shadow: 1px 1px 5px 1px lightgray;
    background-color: #EEE;
  }
  .nodisp {
    display: none;
  }
  .selected {
    color:white;
  }
  div.flight-header {
    left: 0;
    height: 1.6em;
    width: 19em;
    color: black;
    margin: 0.5em 0.5em 0 0.5em;
    cursor: pointer;
  }
  div.flight-header.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  div.flight-header:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  div.flight-header div {
    display: inline-block;
    font-size: small;
    position: relative;
  }
  div .badge {
    font-style: italic;
    width: 18em;
  }
  div.flight-content {
    margin: 0 0 0 1.7em;
    border-radius: 0 0 4px 4px;
    background-color: #BBD8DC;
    width: 16.5em;
    padding: 0.5em;
  }
  `]
})

export class FlightDetailComponent implements OnInit {

  @Input() flight: Flight;
  @Input() isSelected: boolean;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // this.route.paramMap
    //   .switchMap((params: ParamMap) =>
    // this.flightService.getFlights(+params.get('id')))
    //   .subscribe(flight => this.flyer = flight);
  }

  onSelect(): void {
    this.isSelected = !this.isSelected;
  }
}
