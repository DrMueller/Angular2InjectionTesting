import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazyRoutingModule } from './test-lazy-routing.module';
import { TestLazyComponent } from './test-lazy.component';

import { TestSharedModule } from "app/test-shared/";

@NgModule({
  imports: [
    CommonModule,
    TestLazyRoutingModule,
    TestSharedModule
  ],
  declarations: [TestLazyComponent]
})
export class TestLazyModule { 
  constructor() {
    console.log('TestLazyModule created!');
  }

}
