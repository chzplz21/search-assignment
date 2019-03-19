import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatAutocompleteModule,
  MatInputModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule
  
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule
  
  ]
})
export class MaterialModule {}