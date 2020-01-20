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

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule, HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: ListeContratsComponent },
      { path: 'details', component: DetailContratComponent },
      ]) ],
  declarations: [ AppComponent, TopBarComponent, ListeContratsComponent, DetailContratComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  public constructor (
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    //add custom material icons
    matIconRegistry.addSvgIcon('plane', domSanitizer.bypassSecurityTrustResourceUrl('../assets/plane.svg'));
        matIconRegistry.addSvgIcon('surf', domSanitizer.bypassSecurityTrustResourceUrl('../assets/surf.svg'));
}

}
