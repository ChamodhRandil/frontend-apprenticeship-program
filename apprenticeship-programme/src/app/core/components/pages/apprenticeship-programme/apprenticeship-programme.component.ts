import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ToastMessageService} from "../../../../shared/components/services/toast-message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-apprenticeship-programme',
  templateUrl: './apprenticeship-programme.component.html',
  styleUrl: './apprenticeship-programme.component.scss'
})
export class ApprenticeshipProgrammeComponent implements OnInit {
  expanded = false;
  selectedValue!: string;
  courseModuleData: any;
  audio!: HTMLAudioElement;
  soundOn: boolean = false;


  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  constructor(private dataService: DataService,
              private router: Router,
              private toastMsgService: ToastMessageService
  ) {
    this.audio = new Audio();
    this.audio.src = "../assets/music/better-day-186374.mp3";

  }

  ngOnInit(): void {
    this.fetchAboutUsData();
  }

  onExpand() {
    this.expanded = !this.expanded;
  }

  fetchAboutUsData(): void {
    console.log("data");
    this.dataService.getScholarShipData().subscribe((data) => {
      this.courseModuleData = data;
      console.log(data);
      console.log(this.courseModuleData);
    });
  }

  toggleSound(): void {
    this.soundOn = !this.soundOn;
    if (this.soundOn) {
      this.playSound();
    } else {
      this.stopSound();
    }
  }

  playSound() {
    this.audio.load();
    this.audio.play();
    this.toastMsgService.showSuccessToast('Sound On!')
  }

  stopSound() {
    this.audio.pause();
    this.audio.currentTime = 0;
    this.toastMsgService.showErrorToast('Sound Off!')
  }

  navigateCoursePage(){
    this.router.navigateByUrl('/course-data');
  }
}
