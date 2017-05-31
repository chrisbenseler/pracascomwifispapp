import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ZonesPage } from '../pages/zones/zones';
import { PlazaPage } from '../pages/plaza/plaza';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AgmCoreModule } from "@agm/core";
import { PlazasperzoneComponent } from '../components/plazasperzone/plazasperzone';


const firebaseConfig = {
  apiKey: "AIzaSyDLbsk8mtN_6KbCNsYGUjr1ZTjiEOBCnmA",
  authDomain: "pracaswifisp-1496154582648.firebaseapp.com",
  databaseURL: "https://pracaswifisp-1496154582648.firebaseio.com",
  projectId: "pracaswifisp-1496154582648",
  storageBucket: "pracaswifisp-1496154582648.appspot.com",
  messagingSenderId: "252154920140"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ZonesPage,
    PlazaPage,
    PlazasperzoneComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: ''
    },
    {
      links: [
        { component: ZonesPage, name: 'ZonesPage', segment: 'Zones' },
        { component: PlazaPage, name: 'PlazaPage', segment: 'Plaza' }
      ]
    }),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyA0F0GGjJclYIdrfeVxBTZeTwIXtnKmpF8' }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ZonesPage,
    PlazaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
