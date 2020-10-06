import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component62',
  templateUrl: './component62.component.html',
  styleUrls: ['./component62.component.css']
})
export class Component62Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //input is used here as it should get te data input from the parent component//
  @Input() public parentData;

}
