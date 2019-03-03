import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contacts: any=require("../../assets/contacts.png");
}
