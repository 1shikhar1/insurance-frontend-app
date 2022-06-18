import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePlanCalculatorComponent } from './insurance-plan-calculator.component';

describe('InsurancePlanCalculatorComponent', () => {
  let component: InsurancePlanCalculatorComponent;
  let fixture: ComponentFixture<InsurancePlanCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePlanCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePlanCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
