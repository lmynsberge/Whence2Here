import { Component, OnInit, Input } from '@angular/core';
import { DestinationResult } from './../../objects/DestinationResult';

@Component({
  selector: 'flight-result',
  templateUrl: './flight-result.component.html',
  styleUrls: ['./flight-result.component.css'],
})

export class FlightResultComponent implements OnInit {

    @Input() dest: DestinationResult;

    constructor(
    ) {}

  ngOnInit(): void {}

}
