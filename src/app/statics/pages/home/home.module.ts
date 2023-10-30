import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutsModule } from '../../layouts/layouts.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutsModule,
  ]
})
export class HomeModule { }
