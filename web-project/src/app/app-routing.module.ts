import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {EducationComponent} from './education/education.component';
import { GuideComponent } from './guide/guide.component';

import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    // path: 'faq', component: FaqComponent
    path: 'education', component: EducationComponent
  },
  {
    path:'', component:HomeComponent

  },
  {
    path: 'guide', component: GuideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
