import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrdlistProvider} from "../../providers/prdlist/prdlist";
/**
 * Generated class for the PrdinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prdinfo',
  templateUrl: 'prdinfo.html',
})
export class PrdinfoPage {
  prdList:Array<string>
  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public PrdlistProvider: PrdlistProvider) {
  }

  ionViewDidLoad() {
  	/*初始加载列表页*/
  	this.PrdlistProvider.getList().then(data=>{
      let list:any=data;
      this.prdList=list.content;
      console.log(this.prdList)
  	})
    console.log('ionViewDidLoad PrdinfoPage');
  }


}
