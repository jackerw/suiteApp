import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isLogin:boolean;
  constructor(public navCtrl: NavController) {

  }
  goSetting(){
  	this.navCtrl.push('SettingPage');
  }
  goLogin(){
  	this.navCtrl.push('LoginPage');
  }
  changePhoto(){
  	console.log('更换头像')
  }
  ionViewWillEnter() {
  	//检测有无登陆token
  	if(localStorage.getItem('loginToken')){
  		this.isLogin=true;
  	}else{
  		this.isLogin=false;
  	}
  }
}
