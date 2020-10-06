import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component61Component } from './component61.component';

describe('Component61Component', () => {
  let component: Component61Component;
  let fixture: ComponentFixture<Component61Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component61Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
