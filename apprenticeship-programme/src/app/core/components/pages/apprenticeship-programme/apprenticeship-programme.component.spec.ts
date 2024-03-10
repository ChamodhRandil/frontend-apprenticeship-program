import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprenticeshipProgrammeComponent } from './apprenticeship-programme.component';
import { of } from "rxjs";
import { DataService } from "../../../services/data.service";

describe('ApprenticeshipProgrammeComponent', () => {
  let component: ApprenticeshipProgrammeComponent;
  let fixture: ComponentFixture<ApprenticeshipProgrammeComponent>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async () => {
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getScholarShipData']);

    await TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: DataService, useValue: dataServiceSpy }
      ]
    })
      .compileComponents();

    dataService = TestBed.inject(DataService) as jasmine.SpyObj<DataService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeshipProgrammeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default values', () => {
    expect(component.expanded).toBeFalse();
    expect(component.selectedValue).toBeUndefined();
    expect(component.courseModuleData).toBeUndefined();
    expect(component.soundOn).toBeFalse();
  });

  it('should toggle expanded state with onExpand method call', () => {
    expect(component.expanded).toBeFalse();
    component.onExpand();
    expect(component.expanded).toBeTrue();
    component.onExpand();
    expect(component.expanded).toBeFalse();
  });

  it('should fetch data on ngOnInit', () => {
    const mockData = { courseModule: 'test data' };
    dataService.getScholarShipData.and.returnValue(of(mockData));

    component.ngOnInit();

    expect(dataService.getScholarShipData).toHaveBeenCalled();
    expect(component.courseModuleData).toEqual(mockData);
  });

  it('should toggle sound state with toggleSound method call', () => {
    expect(component.soundOn).toBeFalse();
    component.toggleSound();
    expect(component.soundOn).toBeTrue();
  });
});
