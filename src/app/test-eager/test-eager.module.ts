import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestEagerRoutingModule } from './test-eager-routing.module';
import { TestEagerComponent } from './test-eager.component';

import { CoreFeatureService } from "app/core/";

import { TestSharedModule } from "app/test-shared/";

@NgModule({
  imports: [
    CommonModule,
    TestEagerRoutingModule,
    TestSharedModule
  ],
  declarations: [TestEagerComponent]
})
export class TestEagerModule { 
  constructor(){
        console.log('TestEagerModule created');
  }

}
