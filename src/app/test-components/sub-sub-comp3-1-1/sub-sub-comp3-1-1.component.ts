import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core";

export function createCoreFeatureService(): CoreFeatureService {
  var r = new CoreFeatureService("SubSubComp311Component");
  return r;
}

@Component({
  selector: 'app-sub-sub-comp3-1-1',
  templateUrl: './sub-sub-comp3-1-1.component.html',
  styleUrls: ['./sub-sub-comp3-1-1.component.scss']
})
export class SubSubComp311Component implements OnInit {

    constructor(t: CoreFeatureService) { 
      console.log("Created SubSubComp311Component with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
