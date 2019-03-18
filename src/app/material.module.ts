import { NgModule } from '@angular/core';


import {
  MatButtonModule,
  MatMenuModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule
  
  ]
})
export class MaterialModule {}