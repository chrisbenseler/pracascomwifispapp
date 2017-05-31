import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ZonesPage } from '../pages/zones/zones';
import { PlazaPage } from '../pages/plaza/plaza';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { AgmCoreModule } from "@agm/core";
import { PlazasperzoneComponent } from '../components/plazasperzone/plazasperzone';

import { PlazasProvider } from '../providers/plazas/plazas';


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
    HttpModule,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlazasProvider
  ]
})
export class AppModule {}
