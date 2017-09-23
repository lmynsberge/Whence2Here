import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard">Dashboard</a> |
    <a routerLink="/flights">Flights</a>
  </nav>
  <router-outlet></router-outlet>
  `,
})

export class AppComponent {

  title = 'Whence to Here';
}
