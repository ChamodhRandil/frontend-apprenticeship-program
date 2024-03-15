import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apprenticeship-programme-course-module',
  templateUrl: './apprenticeship-programme-course-module.component.html',
  styleUrl: './apprenticeship-programme-course-module.component.scss'
})
export class ApprenticeshipProgrammeCourseModuleComponent implements OnInit {

  courseModuleData: any;
  audio!: HTMLAudioElement;
  isLoading : boolean = false;
  inputValue: string = "";
  inputArray: Array<string> = new Array<string>();
/*
Use for Testing Purposes
*/
  constructor(private dataService: DataService,
              private router: Router) {
    this.audio = new Audio();
    this.audio.src = "../assets/music/better-day-186374.mp3";

  }

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.fetchAboutUsData();
      this.isLoading = false;
    }, 3000);
  }

  fetchAboutUsData(): void {
    console.log("data");
    this.dataService.getScholarShipData().subscribe((data) => {
      this.courseModuleData = data;
      console.log(data);
      console.log(this.courseModuleData);
    });
  }

  Back() {
    this.router.navigateByUrl('/');
  }

  addData(){
    this.inputArray.push(this.inputValue);
    this.inputValue = "";
  }
}
