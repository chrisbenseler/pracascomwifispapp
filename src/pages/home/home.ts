import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation, Coordinates, Geoposition }from '@ionic-native/geolocation';

import { PlazaPage } from '../plaza/plaza';

import { PlazasProvider } from '../../providers/plazas/plazas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plazas: Observable<Array<any>> = null;
  zoom: number = 14;
  coordinates: Coordinates = Object.create({});

  constructor(private navCtrl: NavController,
              private geolocation: Geolocation,
              private plazasProvider: PlazasProvider,
              private modalCtrl: ModalController) {

  }

  ngAfterViewInit() {;
   


    this.plazas = this.plazasProvider.all();

    this.loadMap();
   
  }

  loadMap() {
  	this.geolocation.getCurrentPosition()
    .then( (geoposition: Geoposition) => {
      this.coordinates = geoposition.coords;
    })
    .catch( err => {
      this.coordinates.latitude = -23.5500806;
      this.coordinates.longitude = -46.6362714;
      console.error(err);
    });
  }

  handlePlazaClick(plaza) {
    const modal = this.modalCtrl.create(PlazaPage, { plaza });
    modal.present();
  }

}
