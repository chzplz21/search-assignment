import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.css']
})
export class EntitySearchComponent implements OnInit {
  
  employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor() { }

  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);

  }

  ngOnInit(): void {
    this.employees$ = this.searchTerms.pipe(
      
    );

  }

}
