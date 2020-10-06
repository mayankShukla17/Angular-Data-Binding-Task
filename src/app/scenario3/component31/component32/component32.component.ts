import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-component32',
  templateUrl: './component32.component.html',
  styleUrls: ['./component32.component.css']
})
export class Component32Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //input is used here as it should get te data input from the parent component//
  @Input() public parentData;
}
