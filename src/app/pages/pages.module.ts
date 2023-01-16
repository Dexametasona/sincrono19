import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetallesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    DetallesComponent
  ]
})
export class PagesModule { }
