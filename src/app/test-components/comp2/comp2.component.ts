import { Component, OnInit } from '@angular/core';
import { CoreFeatureService } from "app/core";

export function createCoreFeatureService(): CoreFeatureService {
  var r = new CoreFeatureService("Comp2Component");
  return r;
}

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss'],
    providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService}
  ]
})
export class Comp2Component implements OnInit {

    constructor(t: CoreFeatureService) { 
      console.log("Created Comp2Component with Service from: " + t.createdFrom);
  }
  ngOnInit() {
  }

}
