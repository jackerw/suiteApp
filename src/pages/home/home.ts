import { Component } from '@angular/core';
import { NavController,NavParams,IonicPage} from 'ionic-angular';
import {HomeProvider} from"../../providers/home/home"
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  bannerList:any=[];
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
       public HomeProvider:HomeProvider
  	) { }

 ionViewDidLoad() {
     this.HomeProvider.getHomeData().then(data=>{
          this.bannerList=data;
     });
  }
}
