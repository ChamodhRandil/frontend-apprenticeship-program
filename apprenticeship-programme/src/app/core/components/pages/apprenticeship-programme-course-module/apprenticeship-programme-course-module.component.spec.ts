import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenticeshipProgrammeCourseModuleComponent } from './apprenticeship-programme-course-module.component';

describe('ApprenticeshipProgrammeCourseModuleComponent', () => {
  let component: ApprenticeshipProgrammeCourseModuleComponent;
  let fixture: ComponentFixture<ApprenticeshipProgrammeCourseModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApprenticeshipProgrammeCourseModuleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApprenticeshipProgrammeCourseModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
