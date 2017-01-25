import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core";

export function createCoreFeatureService(): CoreFeatureService {
  var r = new CoreFeatureService("SubComp31Component");
  return r;
}

@Component({
  selector: 'app-sub-comp3-1',
  templateUrl: './sub-comp3-1.component.html',
  styleUrls: ['./sub-comp3-1.component.scss']
})
export class SubComp31Component implements OnInit {

    constructor(t: CoreFeatureService) { 
      console.log("Created SubComp31Component with Service from: " + t.createdFrom);
  }


  ngOnInit() {
  }

}
