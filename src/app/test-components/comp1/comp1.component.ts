import { Component, OnInit } from '@angular/core';
import { CoreFeatureService } from "app/core";

export function createCoreFeatureService(): CoreFeatureService {
  var r = new CoreFeatureService("Comp1Component");
  return r;
}

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss'],
  providers: [
    { provide: CoreFeatureService, useFactory: createCoreFeatureService}
  ]
})
export class Comp1Component implements OnInit {

    constructor(t: CoreFeatureService) { 
      console.log("Created Comp1Component with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
