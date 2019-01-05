import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public inputTextLength: number;
  public AcceptData(value) {
    this.inputTextLength = value.length;
  }
}
