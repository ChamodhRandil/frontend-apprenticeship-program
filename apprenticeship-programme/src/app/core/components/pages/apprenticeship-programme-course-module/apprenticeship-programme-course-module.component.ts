import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
@Component({
  selector: 'app-apprenticeship-programme-course-module',
  templateUrl: './apprenticeship-programme-course-module.component.html',
  styleUrl: './apprenticeship-programme-course-module.component.scss'
})
export class ApprenticeshipProgrammeCourseModuleComponent implements OnInit{

  courseModuleData: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    console.log("hi");
    this.fetchAboutUsData();
  }

  fetchAboutUsData(): void {
    console.log("data");
    this.dataService.getScholarShipData().subscribe((data) => {
      this.courseModuleData = data;
      console.log(data);
      console.log(this.courseModuleData);
    });
  }
}
