import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
  			 public navCtrl: NavController,
  			 public navParams: NavParams,
  			 public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  lgOut(){
	    const confirm = this.alertCtrl.create({
	      message: '确认退出吗？',
	      buttons: [
	        {
	          text: '取消',
	        },
	        {
	          text: '确定',
	          handler: () => {
	            console.log('点击了确定');
	          }
	        }
	      ]
	    });
	    confirm.present();
  	}

}
