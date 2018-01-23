import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PrdconProvider} from"../../providers/prdcon/prdcon"

/**
 * Generated class for the PrdListinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prd-listinfo',
  templateUrl: 'prd-listinfo.html',
})
export class PrdListinfoPage {
  prdlistData:any=[];
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public PrdconProvider:PrdconProvider
  	)
 {
  }

  ionViewDidLoad() {
    this.PrdconProvider.getPrdListData().then(data=>{
    	this.prdlistData=data;
    })
  }
 /*分页*/
 showList(infiniteScroll){
 	console.log('ok')
	infiniteScroll.complete();
 }
}
