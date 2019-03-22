import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Entity } from '../entity';
import { ENTITIES } from '../mock-entities';


@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css']
})
export class EntitySearchComponent implements OnInit {
  

  entities = ENTITIES;
  entityObject = Entity;
  matchedEntity$: Observable<any[]>; 
  matchedArray = new Array();
  private searchTerms = new Subject<string>();
  selectedEmployee: object;
  //DOM element searchBox
  @ViewChild('searchBox') private searchBox;

  constructor(private http: HttpClient) {

    
   }

  ngOnInit(): void {
   
    this.matchedEntity$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchEntities(term)),
    );

  }


  search(term: string): void {
    this.searchTerms.next(term);
    
  }

  
  searchEntities(term: string): Observable<any[]>  {
  
    if (!term.trim()) {
      // if not search term, return empty employee array.
      this.selectedEmployee = null;
      return of([]);
    }

    //handles autocomplete
    for (let i of this.entities) {
      let nameOfEntityPartial = i.name.slice(0, term.length);
      nameOfEntityPartial = nameOfEntityPartial.toLowerCase();
      term = term.toLowerCase();
      //if search term matches first letters of name of entity
      if (term == nameOfEntityPartial) {
        let arrayTemp = new Array();
        arrayTemp.push(i);
        return of(arrayTemp);
      }
      
    }

     
  }

  //Handles selection of entity.
  
  onSelect(entity: Entity): void {
    
    this.searchBox.nativeElement.value = entity.name;
    let tempArray = new Array();
    this.matchedArray = [];
    //First, pushes in searched for entity
    this.matchedArray.push(entity);
   
   //Property name of nested array, either "company_array", or "employee_array" depending
    tempArray.push(Object.values(entity)[3][0].name, Object.values(entity)[3][1].name);

    //Loops through all entities, checks to see if a nested array name matches a name 
    //of another entity
    for (let i of this.entities) {
      if (tempArray.includes(i.name)) {
        //Second, pushes into associated entity
        this.matchedArray.push(i);
      }
    }  
  
  }


}
