import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule,
    RouterModule.forRoot([
      { path: '', component: ListeContratsComponent },
      ]) ],
  declarations: [ AppComponent, TopBarComponent, ListeContratsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  public constructor (
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    //add custom material icons
    matIconRegistry.addSvgIcon('iconName', domSanitizer.bypassSecurityTrustResourceUrl('/path/to/your/svg/icon.svg'));
}

}
