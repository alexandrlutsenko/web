import { Component } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-project';
  homeTitle: any= require ( "../assets/home.png");
  back: any= require ( "../assets/ed_back.png");
  icon: any=require("../assets/icon.png");
}
