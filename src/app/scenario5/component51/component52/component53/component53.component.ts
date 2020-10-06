import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component53',
  templateUrl: './component53.component.html',
  styleUrls: ['./component53.component.css']
})
export class Component53Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //output and childEvent event emitter is used
  @Output() public childEvent = new EventEmitter();

  //event method
  fireEvent(name){
    this.childEvent.emit(name);
  }

}
