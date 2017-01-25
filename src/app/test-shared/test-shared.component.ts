import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-shared',
  templateUrl: './test-shared.component.html',
  styleUrls: ['./test-shared.component.scss']
})
export class TestSharedComponent implements OnInit {

  constructor() { 
      console.log('TestSharedComponent created');
  }

  ngOnInit() {
  }

}
