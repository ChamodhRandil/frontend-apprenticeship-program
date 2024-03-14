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
import {FormsModule} from "@angular/forms";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDivider} from "@angular/material/divider";
import {MatIconButton} from "@angular/material/button";
import {AppRoutingModule} from "./app-routing.module";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    ApprenticeshipProgrammeComponent,
    ApprenticeshipProgrammeCourseModuleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MatIcon,
    MatExpansionModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbar,
    FormsModule,
    MatMenu,
    MatMenuTrigger,
    MatFormField,
    MatSelect,
    MatOption,
    MatDivider,
    MatIconButton,
    MatMenuItem,
    AppRoutingModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
