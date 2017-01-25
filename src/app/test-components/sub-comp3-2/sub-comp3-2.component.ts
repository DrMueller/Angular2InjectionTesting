import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core";

export function createCoreFeatureService(): CoreFeatureService {
  var r = new CoreFeatureService("SubComp32Component");
  return r;
}

@Component({
  selector: 'app-sub-comp3-2',
  templateUrl: './sub-comp3-2.component.html',
  styleUrls: ['./sub-comp3-2.component.scss'],
    providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService}
  ]
})
export class SubComp32Component implements OnInit {

    constructor(t: CoreFeatureService) { 
      console.log("Created SubComp32Component with Service from: " + t.createdFrom);
  }



  ngOnInit() {
  }

}
