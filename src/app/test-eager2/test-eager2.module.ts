import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestEager2RoutingModule } from './test-eager2-routing.module';
import { TestEager2Component } from './test-eager2.component';

import {CoreFeatureService } from "app/core";

import { TestSharedModule } from "app/test-shared/";

export function createCoreFeatureService2(): CoreFeatureService {
  var r = new CoreFeatureService("Eager2-Module");
  console.log('In Eager2-Factory for Service');
  return r;
}


@NgModule({
  imports: [
    CommonModule,
    TestEager2RoutingModule,
    TestSharedModule
  ],
  declarations: [TestEager2Component],
  providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService2}
  ]
})
export class TestEager2Module { 
  constructor() {
    console.log('TestEager2Module created!');
  }
}
