import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { DetailContratComponent } from './detail-contrat/detail-contrat.component';
import { DetailContratService } from './detail-contrat.service';
import { BandeauContratComponent } from './bandeau-contrat/bandeau-contrat.component';
import { ListeOffresComponent } from './liste-offres/liste-offres.component';
import { UpgradeOffreComponent } from './upgrade-offre/upgrade-offre.component';
import { MonIconeComponent } from './mon-icone/mon-icone.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ListeContratsComponent },
      { path: 'details', component: DetailContratComponent },
      { path: 'offres', component: ListeOffresComponent },
      { path: 'upgrade', component: UpgradeOffreComponent },
      ]) ],
  declarations: [ AppComponent, TopBarComponent, ListeContratsComponent, DetailContratComponent, BandeauContratComponent, ListeOffresComponent, UpgradeOffreComponent, MonIconeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DetailContratService]
})
export class AppModule { 



}
