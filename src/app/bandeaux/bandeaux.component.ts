import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bandeaux',
  templateUrl: './bandeaux.component.html',
  styleUrls: ['./bandeaux.component.css']
})
export class BandeauxComponent implements OnInit {

  const initWidth = 7;

  sidenavWidth = this.initWidth;
  ngStyle: string;
  
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.sidenavWidth = 15;
  }
  decrease() {
    this.sidenavWidth = this.initWidth;
  }

  afficherAdmin() {
    window.alert("Sorry, you don't have enough privileges");
  }

  afficherAide() {
    window.alert("Call Natacha, the best PO, at 9-92-96. If she's not available, call C10.");
  }

}