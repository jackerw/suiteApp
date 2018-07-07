import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrdlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prdlist',
  templateUrl: 'prdlist.html',
})
export class PrdlistPage {
  change: string ='stye1';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdListPage');
  }
/*跳转产品列表页*/
  goListinfo(){
  	this.navCtrl.push('PrdinfoPage')
  }


}
