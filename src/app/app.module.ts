import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//COMUNICAÇÃO COM OS DADOS FAKERS (in memory web api) DEVE SER REMOVIDO QUANDO PUBLICAR
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";//DEVE COMENTAR QUANDO PUBLICAR
import { InMemoryDatabase } from "./in-memory-database";//DEVE COMENTAR QUANDO PUBLICAR

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase)//DEVE COMENTAR QUANDO PUBLICAR
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
