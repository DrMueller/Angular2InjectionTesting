import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core";

export function createCoreFeatureService(): CoreFeatureService {
  var r = new CoreFeatureService("Comp3Component");
  return r;
}

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss'],
    providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService}
  ]
})
export class Comp3Component implements OnInit {

    constructor(t: CoreFeatureService) { 
      console.log("Created Comp3Component with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
