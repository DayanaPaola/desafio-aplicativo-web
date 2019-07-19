import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import 'hammerjs'; // Needed for Touch functionality of Material Components
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule} from './layout/layout.module';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import {PendingInterceptorModule} from '../@fury/shared/loading-indicator/pending-interceptor.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ClienteService} from './configuracion/shared/service/cliente.service';
import {FormsModule} from '@angular/forms';

// @ts-ignore
@NgModule({
  imports: [
    // Angular Core Module // Don't remove!
    BrowserModule,
    // Fury Core Modules
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'desafio-aplicativo-web'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,

    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    }),

    LayoutModule,
    PendingInterceptorModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ClienteService]
})
export class AppModule {
}
