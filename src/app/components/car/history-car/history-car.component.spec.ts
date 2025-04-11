import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCarComponent } from './history-car.component';

describe('HistoryCarComponent', () => {
  let component: HistoryCarComponent;
  let fixture: ComponentFixture<HistoryCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
