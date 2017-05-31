import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlazaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-plaza',
  templateUrl: 'plaza.html',
})
export class PlazaPage {

  plaza: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.plaza = this.navParams.data.plaza;
    console.log(this.plaza);
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
