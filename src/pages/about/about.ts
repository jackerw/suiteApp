import { Component } from '@angular/core';
import { NavController ,ModalController} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  isLogin: boolean;
  title: string;

  constructor(public navCtrl: NavController,
              public modalCtrl:ModalController,
              private camera: Camera) {

  }

  goSetting(){
  	this.navCtrl.push('SettingPage');
  }
  goLogin(){
    let loginModal = this.modalCtrl.create('LoginPage');
    loginModal.present();
  }
  changePhoto(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     alert(imageData)
    }, (err) => {
     // Handle error
    });
  }
  ionViewWillEnter() {
    this.title="safasf"
  	//检测有无登陆token
  	if(localStorage.getItem('loginToken')){
  		this.isLogin=true;
  	}else{
  		this.isLogin=false;
  	}
  }
}
