import { Component, OnInit } from '@angular/core';

import { listeContrats } from '../contrats';
import { DetailContratService } from '../detail-contrat.service';

@Component({
  selector: 'app-liste-contrats',
  templateUrl: './liste-contrats.component.html',
  styleUrls: ['./liste-contrats.component.css']
})
export class ListeContratsComponent implements OnInit {

  contractsList = listeContrats;

  constructor(
    private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
  }

  sauverContratCourant(contrat) {
    this.detailContratService.detailContrat(contrat);
    //window.alert('manage ' + contrat.name);
  }

}