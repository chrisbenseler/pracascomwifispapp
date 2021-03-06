import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

import { PlazasProvider } from '../../providers/plazas/plazas';
import { PlazaPage } from '../plaza/plaza';

@Component({
  selector: 'page-zones',
  templateUrl: 'zones.html',
})
export class ZonesPage {

  plazas: any = {
  	'centro': [],
  	'zona norte': [],
  	'zona sul': [],
  	'zona leste': [],
  	'zona oeste': []
  }

  zone: string = 'centro';

  constructor(public navCtrl: NavController,
  			  public navParams: NavParams,
  			  private plazasProvider: PlazasProvider,
  			  private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {

    this.plazasProvider.all().subscribe( plazas => {

      plazas.forEach( plaza => {
      	this.plazas[plaza.zone.toLowerCase()].push(plaza);
      })

    }, (error) => {
      console.error(error);
    });

  }

  handlePlazaClick(plaza) {
    const modal = this.modalCtrl.create(PlazaPage, { plaza });
    modal.present();
  }

}
