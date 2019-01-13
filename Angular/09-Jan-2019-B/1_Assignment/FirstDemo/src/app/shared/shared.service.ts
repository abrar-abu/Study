import { Injectable } from '@angular/core';
import { Employee } from '../empreview/employee';

@Injectable()
export class SharedService {
    emp: Employee = new Employee();
    public setdata(data: Employee) {
        this.emp = data;
    }
    public getData() {
        console.log(this.emp.lastName);
        return this.emp;
    }
}