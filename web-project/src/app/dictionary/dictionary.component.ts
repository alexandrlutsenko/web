import { Component, OnInit } from '@angular/core';
declare var require: any;
@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  engRus: any=require("../../assets/eng-rus.png");
}
