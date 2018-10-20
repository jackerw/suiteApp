import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyApp } from "../../app/app.component";


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:any;
  password:any;	
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    
  }
  //登陆
  login(){
  	if(!this.username || !this.password){
  		const loginTips = this.alertCtrl.create({
	      	title: '登陆提示',
	      	subTitle: '账号或者密码不能为空',
	      	buttons: ['知道了']
    	});
    	loginTips.present();
  	}else{
  		localStorage.setItem('loginToken','true');
      this.navCtrl.push(MyApp);
  	}
  }
}
