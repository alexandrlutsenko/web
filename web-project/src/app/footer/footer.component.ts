import { Component, OnInit } from '@angular/core';
import { PrefixNot } from '@angular/compiler';
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
  pref(){
    var el=document.getElementsByClassName("settings general");
    var l= document.getElementById(el[0].id);
    if(l.style.visibility==="hidden"){
      l.style.visibility="visible";
    }
    else{
      l.style.visibility="hidden"

    }
  }
  colorChange(event:any){
    var el=event.target.value;
    var e=document.getElementsByTagName("header");
    var e2=document.getElementsByTagName("footer");
    var l=e.item(0);
    var l2=e2.item(0);
    console.log(el);
    if(el==1){
      l.style.backgroundColor="#141852";
      l2.style.backgroundColor="#141852";
    }else{
      if(el==2){
        l.style.backgroundColor="rgb(122, 28, 28)";
        l2.style.backgroundColor="rgb(122, 28, 28)";
      }else{
        if(el==3){
          l.style.backgroundColor="rgb(39, 122, 28)";
          l2.style.backgroundColor="rgb(39, 122, 28)";
        }else{
          l.style.backgroundColor="rgb(69, 28, 122)";
          l2.style.backgroundColor="rgb(69, 28, 122)";
        }
      }
    }


   
    
    


  }
}

