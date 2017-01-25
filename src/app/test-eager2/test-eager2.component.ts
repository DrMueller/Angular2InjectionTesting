import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core/";

@Component({
  selector: 'app-test-eager2',
  templateUrl: './test-eager2.component.html',
  styleUrls: ['./test-eager2.component.scss']
})
export class TestEager2Component implements OnInit {

  constructor(t: CoreFeatureService) { 
    console.log("Created TestEager2Component with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
