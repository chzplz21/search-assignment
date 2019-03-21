import { Component, OnInit, Input  } from '@angular/core';
import { Entity } from '../entity';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  //selectedEmployee from entity-search component
 


  @Input() single: Entity;

/*
  @Input() entity: Entity;
  
  bame: Array<Entity>;
 
  @Input()
  set matchedArray(name) {
    this.bame = name;
    console.log(this.bame);
  }
*/
  constructor() { 
   
  }

  ngOnInit() {}

}
