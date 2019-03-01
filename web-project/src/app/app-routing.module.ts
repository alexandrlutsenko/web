import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FaqComponent} from './faq/faq.component';
// import {CommonModule} from '@angular/common';

const routes: Routes = [
  {
    path: 'faq', component: FaqComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // declarations: []
})
export class AppRoutingModule { }
