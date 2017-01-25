import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core/";

@Component({
  selector: 'app-test-lazy',
  templateUrl: './test-lazy.component.html',
  styleUrls: ['./test-lazy.component.scss']
})
export class TestLazyComponent implements OnInit {

  constructor(t: CoreFeatureService) { 
    console.log("Created TestLazyComponent with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
