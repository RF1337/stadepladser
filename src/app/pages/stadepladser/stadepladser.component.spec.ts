import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadepladserComponent } from './stadepladser.component';

describe('StadepladserComponent', () => {
  let component: StadepladserComponent;
  let fixture: ComponentFixture<StadepladserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StadepladserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadepladserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
