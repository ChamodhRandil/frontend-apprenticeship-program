import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ApprenticeshipProgrammeCourseModuleComponent } from "./core/components/pages/apprenticeship-programme-course-module/apprenticeship-programme-course-module.component";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {
  ApprenticeshipProgrammeComponent
} from "./core/components/pages/apprenticeship-programme/apprenticeship-programme.component";

@NgModule({
  declarations: [
    AppComponent,
    ApprenticeshipProgrammeCourseModuleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ApprenticeshipProgrammeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
