import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Flight } from './flight';
import { FlightService } from './flight.service';

@Component({
  selector: 'flight-detail',
  template: `
  <div class="flight-details" *ngIf="flight">
    {{flight.price}}
    {{flight.destination}}
  </div>
  
  `,
  styles: [`
  
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

  onRemove(): void {
    this.flight = null;
  }
}
