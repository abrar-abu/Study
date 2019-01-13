import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { Employee } from '../empreview/employee';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  getData :Employee = new Employee();
  constructor(private share:SharedService) {
    this.getData = this.share.getData();

  }
  ngOnInit() {
    this.getData = this.share.getData();
    console.log(this.getData);
  }

}
