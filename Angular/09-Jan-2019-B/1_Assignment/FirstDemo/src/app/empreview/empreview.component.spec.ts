import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPReviewComponent } from './empreview.component';

describe('EMPReviewComponent', () => {
  let component: EMPReviewComponent;
  let fixture: ComponentFixture<EMPReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMPReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMPReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
