/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubComp32Component } from './sub-comp3-2.component';

describe('SubComp32Component', () => {
  let component: SubComp32Component;
  let fixture: ComponentFixture<SubComp32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComp32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComp32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
