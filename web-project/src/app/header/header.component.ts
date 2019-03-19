import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../app.component.css']
})
export class HeaderComponent implements OnInit {

  homeTitle: any= require ( "../../assets/home.png");
  back: any= require ( "../../assets/ed_back.png");
  icon: any=require("../../assets/icon.png");
  
  constructor() { }

  ngOnInit() {
  }

}
