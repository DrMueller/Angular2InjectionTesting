/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TestEagerComponent } from './test-eager.component';

describe('TestEagerComponent', () => {
  let component: TestEagerComponent;
  let fixture: ComponentFixture<TestEagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
