import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
@Component({
  selector: 'app-apprenticeship-programme-course-module',
  templateUrl: './apprenticeship-programme-course-module.component.html',
  styleUrl: './apprenticeship-programme-course-module.component.scss'
})
export class ApprenticeshipProgrammeCourseModuleComponent implements OnInit{

  courseModuleData: any;
  audio!: HTMLAudioElement;


  constructor(private dataService: DataService) {
    this.audio = new Audio();
    this.audio.src = "../assets/music/better-day-186374.mp3";

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

  playSound(){
    // let audio =  new Audio();
    // audio.src = "../assets/music/better-day-186374.mp3";
    this.audio.load();
    this.audio.play();
  }

  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }
}
