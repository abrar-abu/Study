import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() public parentData;
  @Output() public ChildEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  public SendEvent() {
    this.ChildEvent.emit('Data from child ');
  }
}
