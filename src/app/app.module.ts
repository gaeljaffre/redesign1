import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot([
      { path: '', component: ListeContratsComponent },
      ]) ],
  declarations: [ AppComponent, TopBarComponent, ListeContratsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
