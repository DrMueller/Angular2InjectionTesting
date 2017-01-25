import { Component, OnInit } from '@angular/core';

import { CoreFeatureService } from "app/core/";

@Component({
  selector: 'app-test-eager',
  templateUrl: './test-eager.component.html',
  styleUrls: ['./test-eager.component.scss']
})
export class TestEagerComponent implements OnInit {

  constructor(t: CoreFeatureService) { 
    console.log("Created TestEagerComponent with Service from: " + t.createdFrom);
  }

  ngOnInit() {
  }

}
