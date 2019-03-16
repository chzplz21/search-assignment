import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EntitySearchComponent } from './entity-search/entity-search.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EntitySearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
