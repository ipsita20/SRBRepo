import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartTaskPage } from './start-task.page';

describe('StartTaskPage', () => {
  let component: StartTaskPage;
  let fixture: ComponentFixture<StartTaskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartTaskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartTaskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
