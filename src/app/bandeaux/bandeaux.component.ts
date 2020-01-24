import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeaux',
  templateUrl: './bandeaux.component.html',
  styleUrls: ['./bandeaux.component.css']
})
export class BandeauxComponent implements OnInit {

  sidenavWidth = 4;
  ngStyle: string;
  
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
    console.log('increase sidenav width');
  }
  decrease() {
    this.sidenavWidth = 4;
    console.log('decrease sidenav width');
  }

}