import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { MaterialsComponent } from './materials/materials.component';
import { ForumComponent } from './forum/forum.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,

    EducationComponent,

    GuideComponent,

    HomeComponent,

    DictionaryComponent,

    MaterialsComponent,

    ForumComponent,

    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
