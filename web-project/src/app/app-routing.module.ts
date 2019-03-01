import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {EducationComponent} from './education/education.component';

const routes: Routes = [
  {
    // path: 'faq', component: FaqComponent
    path: 'education', component: EducationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
