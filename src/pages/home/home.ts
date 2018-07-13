import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomeProvider} from "../../providers/home/home";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  bannerList:Array<string>
  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public HomeProvider: HomeProvider
    ) {
  }

  ionViewDidLoad() {
  	this.HomeProvider.getBanner().then(data=>{
      let blist:any=data;
      this.bannerList=blist.content;
  	})
  }

}
