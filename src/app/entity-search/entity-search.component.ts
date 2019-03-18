import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css']
})
export class EntitySearchComponent implements OnInit {
  
  employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();
  private employeesURL = 'api/employees'; 
  selectedEmployee: object;
  @ViewChild('searchBox') private searchBox;

  constructor(private http: HttpClient) { }

  search(term: string): void {
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
      this.selectedEmployee = false;
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesURL}/?name=${term}`).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
     
  }

  //Handles selection of employee.
  //selectedEmployee property imported into employee-detail
  onSelect(employee: object): void {
    this.selectedEmployee = employee;
    //sets input box value with selected name
    this.searchBox.nativeElement.value = employee.name;
   
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
