/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubSubComp311Component } from './sub-sub-comp3-1-1.component';

describe('SubSubComp311Component', () => {
  let component: SubSubComp311Component;
  let fixture: ComponentFixture<SubSubComp311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubSubComp311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubSubComp311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
