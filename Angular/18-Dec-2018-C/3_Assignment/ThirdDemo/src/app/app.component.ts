import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: String  = 'app';
  text: String = '';
  toggle: Boolean = true;
  fun() {
    if (this.toggle === true) {
      this.toggle = false;
      this.text = 'Educating for Better tomorrow';
    } else {
      this.toggle = true;
      this.text = 'Marvellous Infosystems';
    }

  }

}
