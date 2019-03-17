import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../Mock-Employees';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: object;
  employees = EMPLOYEES;

  constructor() {}

  ngOnInit() {
  }

  onSelect(employee: object): void {
     this.selectedEmployee = employee;
     
    
  }

 

}
