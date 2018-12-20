import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  text = 'Marvellous Infosystems';
  upper() {
    this.text = this.text.toUpperCase();
  }
  lower() {
    this.text = this.text.toLowerCase();
  }
}
