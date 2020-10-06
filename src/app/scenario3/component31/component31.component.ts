import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component31',
  templateUrl: './component31.component.html',
  styleUrls: ['./component31.component.css']
})
export class Component31Component implements OnInit {
  public text;
  constructor() { }

  ngOnInit() {
  }

  //text is given in the parent componnet and gets displayed in the child component//
  fireEvent(message){
    this.text = message; 
  }
}
