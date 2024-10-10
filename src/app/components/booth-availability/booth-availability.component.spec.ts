import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothAvailabilityComponent } from './booth-availability.component';

describe('BoothAvailabilityComponent', () => {
  let component: BoothAvailabilityComponent;
  let fixture: ComponentFixture<BoothAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoothAvailabilityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoothAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
