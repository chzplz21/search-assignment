import { Component, OnInit, Input  } from '@angular/core';
//import { selectedEmployee } from '../employees/employees.component';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  @Input('selectedEmployee') selectedEmployee:object;

  constructor() { }

  ngOnInit() {
  }

}