import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {LoadingController,ToastController }from 'ionic-angular';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {
  baseUrl:string="./";

  constructor(public http: Http,public toastCtrl: ToastController) {
    console.log('Hello ConfigProvider Provider');
  }

  /*首页*/
  getHomeUrl(){
  	return this.baseUrl+'assets/local-data/home.json';
  }
  /*获取列表页数据*/
  getPrdlistUrl(){
    return this.baseUrl+'assets/local-data/prdlist.json';
  }
  /*公共提示方法*/
openTips(content,time,pt){
  let toast = this.toastCtrl.create({
        message: content,
        duration: time,
        position: pt,
      });
    toast.present();
  }
  /*获取同级兄弟元素*/
 siblingElem(elem){
      var nodes=[]; 
        var previ=elem.previousSibling; 
        while(previ){ 
            if(previ.nodeType===1){ 
                nodes.push(previ); 
            } 
            previ=previ.previousSibling; 
        } 
        nodes.reverse(); 
        var nexts=elem.nextSibling; 
        while(nexts){ 
            if(nexts.nodeType===1){ 
                nodes.push(nexts); 
            } 
            nexts=nexts.nextSibling; 
        } 
        return nodes; 
    }
}