import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreFeatureService } from "./services";

export function createCoreFeatureService(): CoreFeatureService {
  console.log('In Core-Factory for Service');
  var r = new CoreFeatureService("Core-Module");
  return r;
}

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService}
  ]
})
export class CoreModule { 
  constructor(){
      console.log('CoreModule created!');
  }    
}
