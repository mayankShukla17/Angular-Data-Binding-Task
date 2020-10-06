import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component42',
  templateUrl: './component42.component.html',
  styleUrls: ['./component42.component.css']
})
export class Component42Component implements OnInit {

   //output and childEvent event emitter is used
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

 //event method //
 fireEvent(name){
  this.childEvent.emit(name);
}

}
