import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configUrl } from '../config/config';


/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {
  //bannerList:any;
  constructor(public http: HttpClient) {
   }

  getBanner(){
  	return new Promise((resolve,reject)=>{
  		this.http.get(configUrl.homeUrl)
          .subscribe(data =>  {
            let bannerList:any=data;
            if(bannerList.statusCode==200){
               resolve(bannerList)
            }
        });
  	   })
  }
}
