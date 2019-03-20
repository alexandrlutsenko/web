import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show(id:string){
    console.log(id);
    var all=document.getElementsByClassName("list");
        for(var i=0;i<all.length;i++){
          var e=document.getElementById(all[i].id);
            e.style.setProperty("visibility","hidden");
        }
        var all=document.getElementsByClassName("content");
        for(var i=0;i<all.length;i++){
          var e=document.getElementById(all[i].id);
          e.style.setProperty("visibility","hidden");
        }
    var el=document.getElementById(id+"L");
    el.style.setProperty("visibility","visible");
    
  }
  showContent(id:String){
        var other=document.getElementsByClassName("content");
        for(var i=0;i<other.length;i++){
          var e=document.getElementById(other[i].id);
          e.style.setProperty("visibility","hidden");
        }
        var el=document.getElementById(id+"C");
        el.style.setProperty("visibility","visible");
  }

}
