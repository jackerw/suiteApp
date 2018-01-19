import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prd-list',
  templateUrl: 'prd-list.html',
})
export class PrdListPage {
  change: string ='stye1';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrdListPage');
  }
/*跳转产品列表页*/
goListinfo(){
	this.navCtrl.push('PrdListinfoPage')
}
}
