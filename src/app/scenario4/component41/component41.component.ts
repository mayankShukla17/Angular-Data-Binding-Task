import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component41',
  templateUrl: './component41.component.html',
  styleUrls: ['./component41.component.css']
})
export class Component41Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public output;
  message(message){
    this.output=message;
  }
}
