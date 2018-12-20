import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FistCompComponent } from './fist-comp.component';

describe('FistCompComponent', () => {
  let component: FistCompComponent;
  let fixture: ComponentFixture<FistCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FistCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FistCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
