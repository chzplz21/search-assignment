import { Component, OnInit, Input  } from '@angular/core';
import { Entity } from '../entity';


@Component({
  selector: 'app-entity-detail',
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent implements OnInit {
  
 
  @Input() single: Entity;


  constructor() { 
   
  }

  ngOnInit() {}

}
