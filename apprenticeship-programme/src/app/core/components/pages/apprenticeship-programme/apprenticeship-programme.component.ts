import {Component, OnInit} from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelDescription,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatIconButton} from "@angular/material/button";
import {MatSlider} from "@angular/material/slider";
import {MatToolbar} from "@angular/material/toolbar";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-apprenticeship-programme',
  standalone: true,
  imports: [ MatIcon, MatDivider, NgOptimizedImage, NgIf, NgForOf, MatMenuTrigger, MatMenu, MatFormField, MatSelect, MatOption, FormsModule, MatAccordion, MatExpansionPanel, MatExpansionPanelTitle, MatExpansionPanelDescription, MatIconButton, MatIconModule, MatSlider, MatToolbar, MatMenuItem
  ],
  templateUrl: './apprenticeship-programme.component.html',
  styleUrl: './apprenticeship-programme.component.scss'
})
export class ApprenticeshipProgrammeComponent implements OnInit{
  expanded = false;
  selectedValue!: string;
  courseModuleData: any;
  audio!: HTMLAudioElement;
  soundOn: boolean = true;


  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  constructor(private dataService: DataService) {
    this.audio = new Audio();
    this.audio.src = "../assets/music/better-day-186374.mp3";

  }

  ngOnInit(): void {
    console.log("hi");
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
    // Add logic to turn sound on/off
  }
}
