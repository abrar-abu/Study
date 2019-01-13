import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { SharedService } from '../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empreview',
  templateUrl: './empreview.component.html',
  styleUrls: ['./empreview.component.css']
})
export class EMPReviewComponent implements OnInit {

  employee: Employee = new Employee();
  serviceData: Employee = new Employee();

  constructor(private shared: SharedService, private router: Router) {
  }

  ngOnInit() {
  }
  public employeeSubmit() {
    this.shared.setdata(this.employee);
    console.log("this is " + this.employee.lastName);
    this.displayEmployee();
  }
  public displayEmployee() {
    this.serviceData = this.shared.getData();
    this.router.navigate(['show']);
  }
}
