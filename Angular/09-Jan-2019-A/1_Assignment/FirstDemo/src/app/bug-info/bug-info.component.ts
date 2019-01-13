import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bug-info',
  templateUrl: './bug-info.component.html',
  styleUrls: ['./bug-info.component.css']
})
export class BugInfoComponent implements OnInit {

  myTime: Date = new Date();
  showMin: boolean = true;
  showSec: boolean = true;

  toggleMinutes(): void {
    this.showMin = !this.showMin;
  }

  toggleSeconds(): void {
    this.showSec = !this.showSec;
  }
  constructor() { }

  ngOnInit() {
  }

}
