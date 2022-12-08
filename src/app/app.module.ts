import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigimonComponent } from './digimon/digimon.component';
import { DigimonCardsComponent } from './digimon-cards/digimon-cards.component';

@NgModule({
  declarations: [AppComponent, DigimonComponent, DigimonCardsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
