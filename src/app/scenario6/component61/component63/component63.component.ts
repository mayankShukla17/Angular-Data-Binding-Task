import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component63',
  templateUrl: './component63.component.html',
  styleUrls: ['./component63.component.css']
})
export class Component63Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //input is used here as it should get te data input from the parent component//
  @Input() public parentData;
}
