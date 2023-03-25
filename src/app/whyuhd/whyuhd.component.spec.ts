import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyuhdComponent } from './whyuhd.component';

describe('WhyuhdComponent', () => {
  let component: WhyuhdComponent;
  let fixture: ComponentFixture<WhyuhdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyuhdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyuhdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
