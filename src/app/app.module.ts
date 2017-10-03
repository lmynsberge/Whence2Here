import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { FlyerDetailComponent } from './flyer-detail.component';
import { FlightDetailComponent } from './flight-detail.component';
import { FlightsComponent } from './flights.component';
import { FlightService } from './flight.service';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'flights',
        component: FlightsComponent
      },
      {
        path: 'flights/:id',
        component: FlightDetailComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: FlyerDetailComponent
      }
    ])
   ],
  declarations: [ AppComponent, FlyerDetailComponent, FlightsComponent, DashboardComponent, FlightDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ FlightService ]
})
export class AppModule { }


