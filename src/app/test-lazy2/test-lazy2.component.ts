import { Component, OnInit } from '@angular/core';

import {CoreFeatureService } from "app/core/";

@Component({
  selector: 'app-test-lazy2',
  templateUrl: './test-lazy2.component.html',
  styleUrls: ['./test-lazy2.component.scss']
})
export class TestLazy2Component implements OnInit {
    constructor(t: CoreFeatureService) { 
      console.log("Created TestLazy2Component with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
