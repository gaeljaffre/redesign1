import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DetailContratService } from '../detail-contrat.service';

@Component({
  selector: 'app-liste-offres',
  templateUrl: './liste-offres.component.html',
  styleUrls: ['./liste-offres.component.css']
})
export class ListeOffresComponent implements OnInit {

  contrat;

  constructor(
    private route: ActivatedRoute,
    private detailContratService: DetailContratService
  ) { }

  ngOnInit() {
    this.contrat = this.detailContratService.contratCourant();
  }

}