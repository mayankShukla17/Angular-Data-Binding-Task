import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component63Component } from './component63.component';

describe('Component63Component', () => {
  let component: Component63Component;
  let fixture: ComponentFixture<Component63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
