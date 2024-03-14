import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ApprenticeshipProgrammeComponent} from "./core/components/pages/apprenticeship-programme/apprenticeship-programme.component";
import {ApprenticeshipProgrammeCourseModuleComponent} from "./core/components/pages/apprenticeship-programme-course-module/apprenticeship-programme-course-module.component";

const routes: Routes = [
  {path: '', component: ApprenticeshipProgrammeComponent},
  {path: 'course-data', component: ApprenticeshipProgrammeCourseModuleComponent},
];

@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
