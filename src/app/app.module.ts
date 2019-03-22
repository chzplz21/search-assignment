
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';

import { EntitySearchComponent } from './entity-search/entity-search.component';
import { EntityDetailComponent } from './entity-detail/entity-detail.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EntitySearchComponent,
    EntityDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
