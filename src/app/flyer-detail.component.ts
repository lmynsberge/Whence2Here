import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Flyer } from './objects/flyer';
import { FlightService } from './services/flight.service';

@Component({
  selector: 'flyer-detail',
  template: `
  <div class="flyer-details" *ngIf="flyer">
    <!-- Header of a flyer -->
    <div class="flyer-header" [class.selected]="isSelected" >
      <div class="remove"
        (click)="onRemove()">
        -
      </div>
      <div 
        (click)="onSelect()">
        <span class="badge">{{flyer.startingLocation}}</span>
          {{flyer.name}}
      </div>
      
    </div>

    <!-- Content of a flyer -->
    <div class="flyer-content" [class.nodisp]="!isSelected">
      <div>
        <input [(ngModel)]="flyer.name" placeholder="Name" />
      </div>
      <div>
        <input [(ngModel)]="flyer.startingLocation" placeholder="Starting location" />
      </div>
    </div>
  </div>
  
  `,
  styles: [`
  .flyer-details {
    color: black;
    display: inline-block;
  }
  .nodisp {
    display: none;
  }
  .selected {
    color:grey;
  }
  div.flyer-header {
    left: 0;
    background-color: #EEE;
    height: 1.6em;
    border-radius: 4px;
    width: 19em;
    color: black;
    margin: 0.5em 0.5em 0 0.5em;
    box-shadow: 1px 1px 5px 1px lightgray;
    cursor: pointer;
  }
  div.flyer-header.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  div.flyer-header:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  div.flyer-header div {
    display: inline-block;
    font-size: small;
    position: relative;
  }
  div .remove {
    border-radius: 4px 0 0 4px;
    width: 1em;
    background-color: darkred;
    color: white;
    height: 1.8em;
    padding: 0.2em 0 0 0.5em;
  }
  div .badge {
    font-style: italic;
    width: 18em;
  }
  div.flyer-content {
    margin: 0 0 0 1.7em;
    border-radius: 0 0 4px 4px;
    box-shadow: 1px 1px 5px 1px lightgray;
    background-color: #BBD8DC;
    width: 16.5em;
    padding: 0.5em;
  }
  `]
})

export class FlyerDetailComponent implements OnInit {

  @Input() flyer: Flyer;
  @Input() isSelected: boolean;

  constructor(
    private flightService: FlightService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
  }

  onSelect(): void {
    this.isSelected = !this.isSelected;
  }

  onRemove(): void {
    this.flyer = null;
  }
}
