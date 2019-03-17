import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css']
})
export class EntitySearchComponent implements OnInit {
  
  employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();
  private employeesURL = 'api/employees'; 

  constructor(private http: HttpClient) { }

  search(term: string): void {
   // console.log(term);
    this.searchTerms.next(term);

  }

  ngOnInit(): void {
    this.employees$ = this.searchTerms.pipe(

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
      // ignore new term if same as previous term
      distinctUntilChanged(),
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.searchEntities(term)),
    );

  }


  searchEntities(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Employee[]>(this.employeesURL);
     
    

  }


}
