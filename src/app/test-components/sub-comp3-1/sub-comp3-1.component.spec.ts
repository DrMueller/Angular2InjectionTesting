/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubComp31Component } from './sub-comp3-1.component';

describe('SubComp31Component', () => {
  let component: SubComp31Component;
  let fixture: ComponentFixture<SubComp31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComp31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComp31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
