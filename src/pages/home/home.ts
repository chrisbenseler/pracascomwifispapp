import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation, Coordinates, Geoposition }from '@ionic-native/geolocation';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { PlazaPage } from '../plaza/plaza';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  plazas = [];
  zoom: number = 14;
  coordinates: Coordinates = Object.create({});

  constructor(private navCtrl: NavController,
              private geolocation: Geolocation,
              private db: AngularFireDatabase,
              private modalCtrl: ModalController) {

  }

  ngAfterViewInit() {;
   

    this.db.list('/plazas').subscribe( plazas => {

      this.plazas = plazas.filter( plaza => plaza.location !== undefined)

    }, (error) => {
      console.error(error);
    });

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
