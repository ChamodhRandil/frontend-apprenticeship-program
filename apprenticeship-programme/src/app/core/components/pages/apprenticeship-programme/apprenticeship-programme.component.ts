import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatDivider} from "@angular/material/divider";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatMenu, MatMenuTrigger} from "@angular/material/menu";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-apprenticeship-programme',
  standalone: true,
  imports: [
    MatIcon,
    MatDivider,
    NgOptimizedImage,
    NgIf,
    NgForOf,
    MatMenuTrigger,
    MatMenu,
    MatFormField,
    MatSelect,
    MatOption,
    FormsModule
  ],
  templateUrl: './apprenticeship-programme.component.html',
  styleUrl: './apprenticeship-programme.component.scss'
})
export class ApprenticeshipProgrammeComponent {
  showABC = false;
  showAAA = false;
  showBBB = false;
  showCCC = false;
  selectedValue!: string;

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  onexpand() {
    this.showABC = !this.showABC;
  }

  onexpandA() {
    this.showAAA = !this.showAAA;
  }

  onexpandB() {
    this.showBBB = !this.showBBB;
  }

  onexpandC() {
    this.showCCC = !this.showCCC;
  }

}
