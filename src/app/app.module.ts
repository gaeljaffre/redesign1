import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { DetailContratService } from './detail-contrat.service';
import { BandeauContratComponent } from './bandeau-contrat/bandeau-contrat.component';
import { ListeOffresComponent } from './liste-offres/liste-offres.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ListeContratsComponent },
      { path: 'details', component: DetailContratComponent },
      { path: 'offres', component: ListeOffresComponent },
      ]) ],
  declarations: [ AppComponent, TopBarComponent, ListeContratsComponent, DetailContratComponent, BandeauContratComponent, ListeOffresComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DetailContratService]
})
export class AppModule { 

  public constructor (
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
      //add custom material icons
      matIconRegistry.addSvgIcon('plane', domSanitizer.bypassSecurityTrustResourceUrl('../assets/plane.svg'));
      matIconRegistry.addSvgIcon('surf', domSanitizer.bypassSecurityTrustResourceUrl('../assets/surf.svg'));
      matIconRegistry.addSvgIcon('hand', domSanitizer.bypassSecurityTrustResourceUrl('../assets/hand.svg'));
      matIconRegistry.addSvgIcon('contrat', domSanitizer.bypassSecurityTrustResourceUrl('../assets/contrat.svg'));
    }

}
