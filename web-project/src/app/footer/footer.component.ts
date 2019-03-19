import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./../app.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  homeTitle: any= require ( "../../assets/home.png");
  back: any= require ( "../../assets/ed_back.png");
  icon: any=require("../../assets/icon.png");

}
