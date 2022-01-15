import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  div {
    color: red;
  }
  p {
    color: black;
  }`]
})
export class AppComponent {
  title = 'sample';
}
