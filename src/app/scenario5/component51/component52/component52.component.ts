import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component52',
  templateUrl: './component52.component.html',
  styleUrls: ['./component52.component.css']
})
export class Component52Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //output and childEvent event emitter is used
  @Output() public childEvent1 = new EventEmitter();
  
  //event method
  dipslay(message){
    this.childEvent1.emit(message);
  }
  
}
