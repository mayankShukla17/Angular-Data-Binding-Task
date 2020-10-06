import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component11',
  templateUrl: './component11.component.html',
  styleUrls: ['./component11.component.css']
})
export class Component11Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showText(title:string){
    if(title!=""){
      console.log(title);
    }
    else{
      console.log("Enter the proper Text.")
    }
  }
}
