import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  public UserName = '';
  public childtext = '';
  @Output() childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public SendEvent() {
    // this.childEvent.emit('Hello from child');
    this.childEvent.emit(this.childtext);
  }
}
