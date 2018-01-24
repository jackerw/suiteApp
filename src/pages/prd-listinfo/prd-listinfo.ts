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
  pageNum:number=1;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public PrdconProvider:PrdconProvider
  	)
 {
  }

  ionViewDidLoad() {
      this.loadListData(this.pageNum)
  }
  loadListData(page:number):void{
    let last=page*6
     this.PrdconProvider.getPrdListData().then(data=>{
          this.prdlistData=data.content.slice(0,last);
          console.log(this.prdlistData)
     })
  }
 /*分页*/
 showList(infiniteScroll){
/* 	this.pageNum++;
*//*       this.loadListData(this.pageNum)
*/	infiniteScroll.complete();
 }
 /*跳转详情页*/
 goInfo(){
    this.navCtrl.push('PrdConPage')
 }
}
