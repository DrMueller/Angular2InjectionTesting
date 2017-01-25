import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestSharedComponent } from './test-shared.component';

import {  RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [TestSharedComponent]
})
export class TestSharedModule { 
  constructor() {
    console.log('TestSharedModule created');
  }
}
