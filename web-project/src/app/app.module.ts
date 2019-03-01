import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { FaqComponent } from './faq/faq.component';
import { RoutesComponent } from './routes/routes.component';
=======
import { EducationComponent } from './education/education.component';
>>>>>>> cb2a755afea29f099ba12cb0d1f97c56b90c8cda

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    FaqComponent,
    RoutesComponent
=======
    EducationComponent
>>>>>>> cb2a755afea29f099ba12cb0d1f97c56b90c8cda
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
