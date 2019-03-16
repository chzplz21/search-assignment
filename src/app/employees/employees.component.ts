import { Component, OnInit } from '@angular/core';
import { EMPLOYEES } from '../Mock-Employees';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees = EMPLOYEES;
   

  constructor() {}

  ngOnInit() {
  }

 

}
