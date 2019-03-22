import { Component, OnInit, Input  } from '@angular/core';
import { Entity } from '../entity';


@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent implements OnInit {
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
