import { Component, Output, Input } from '@angular/core';
import { responseApiInterface } from './responseApiInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tp-groupe';
  test: string = "reussit";
  pannier: responseApiInterface[] = [];

  newItem(item: responseApiInterface) {
    this.pannier.push(item)
  }
}
