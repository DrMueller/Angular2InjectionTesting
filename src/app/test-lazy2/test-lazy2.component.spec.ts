/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestLazy2Component } from './test-lazy2.component';

describe('TestLazy2Component', () => {
  let component: TestLazy2Component;
  let fixture: ComponentFixture<TestLazy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLazy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLazy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
