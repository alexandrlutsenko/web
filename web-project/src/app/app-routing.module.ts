import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';
import {EducationComponent} from './education/education.component';
import { GuideComponent } from './guide/guide.component';

import {HomeComponent} from './home/home.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MaterialsComponent } from './materials/materials.component';
import { ContactComponent } from './contact/contact.component';
import { ForumComponent } from './forum/forum.component';


const routes: Routes = [
  {
    // path: 'faq', component: FaqComponent
    path: 'education', 
    component: EducationComponent,
  },
  {
    path:'', component:HomeComponent

  },
  {
    path: 'guide', component: GuideComponent
  },
  {
    path: 'dictionary', component: DictionaryComponent
  },
  {
    path: 'materials', component: MaterialsComponent
  },
  {
    path: 'contacts', component: ContactComponent
  },
  {
    path: 'forum',component:ForumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
