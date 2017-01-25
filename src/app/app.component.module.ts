import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppComponentRoutingModule { }