import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipProgrammeComponent } from './apprenticeship-programme.component';

describe('ApprenticeshipProgrammeComponent', () => {
  let component: ApprenticeshipProgrammeComponent;
  let fixture: ComponentFixture<ApprenticeshipProgrammeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprenticeshipProgrammeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprenticeshipProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
