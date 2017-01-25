/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestLazyComponent } from './test-lazy.component';

describe('TestLazyComponent', () => {
  let component: TestLazyComponent;
  let fixture: ComponentFixture<TestLazyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLazyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
