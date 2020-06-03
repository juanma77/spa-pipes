import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

registerLocaleData(localEs); 
registerLocaleData(localFr);


@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    SecureDomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [

    // Definimos el español como el idioma por defecto de la aplicación 
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
