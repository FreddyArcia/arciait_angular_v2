import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsComponent } from './layouts.component';



@NgModule({
  declarations: [
    LayoutsComponent
  ],
  exports: [
    LayoutsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
