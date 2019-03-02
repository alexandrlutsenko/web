import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { GuideComponent } from './guide/guide.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    EducationComponent,

    GuideComponent,

    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
