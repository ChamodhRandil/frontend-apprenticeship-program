import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprenticeshipProgrammeCourseModuleComponent } from "./core/components/pages/apprenticeship-programme-course-module/apprenticeship-programme-course-module.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {
  ApprenticeshipProgrammeComponent
} from "./core/components/pages/apprenticeship-programme/apprenticeship-programme.component";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbar} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    ApprenticeshipProgrammeCourseModuleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ApprenticeshipProgrammeComponent,
    MatIcon,
    MatExpansionModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
