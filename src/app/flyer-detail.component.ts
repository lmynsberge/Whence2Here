import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Flyer } from './flyer';
import { FlightService } from './flight.service';

@Component({
  selector: 'flyer-detail',
  template: `
  <div *ngIf="flyer">

   <h2>{{flyer.name}} Details!</h2>
    <div>
      <label>id: </label>
      {{flyer.id}}
    </div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="flyer.name" placeholder="name" />
    </div>

    </div>
  `
})

export class FlyerDetailComponent implements OnInit {

  @Input() flyer: Flyer;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) =>
    this.flightService.getFlight(+params.get('id')))
      .subscribe(flight => this.flyer = flight);
  }
}
