import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestLazy2RoutingModule } from './test-lazy2-routing.module';
import { TestLazy2Component } from './test-lazy2.component';

import { CoreFeatureService } from "app/core/";

export function createCoreFeatureService3(): CoreFeatureService {
  console.log('In Lazy2-Factory for Service');
  var r = new CoreFeatureService("Lazy2-Module");
  return r;
}

@NgModule({
  imports: [
    CommonModule,
    TestLazy2RoutingModule
  ],
  declarations: [TestLazy2Component],
  providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService3}
  ]
})

export class TestLazy2Module { 
  constructor(){
    console.log('TestLazy2Module created');
  }

}
