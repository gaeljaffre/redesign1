import { Component, OnInit } from '@angular/core';

import { listeContrats } from '../contrats';

@Component({
  selector: 'app-liste-contrats',
  templateUrl: './liste-contrats.component.html',
  styleUrls: ['./liste-contrats.component.css']
})
export class ListeContratsComponent implements OnInit {

  contractsList = listeContrats;

  constructor() { }

  ngOnInit() {
  }

}