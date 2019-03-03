import { Component, OnInit } from '@angular/core';
declare var require: any;

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})


export class ForumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  msg: any= require("../../assets/msg_icon.png");
  msgBlue: any= require("../../assets/msg_icon_blue.png");
}
