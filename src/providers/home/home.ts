import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../../providers/config/config';
import 'rxjs/add/operator/map';
/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {

  constructor(public http: Http,public ConfigProvider:ConfigProvider) {
    console.log('Hello HomeProvider Provider');
  }
  getHomeData(){
  	return new Promise((resolve,reject)=>{
  		this.http.get(this.ConfigProvider.getHomeUrl())
              .map(res=>res.json())
              .subscribe(data=>{
  			if(data.statusCode==200){
  				resolve(data);
  			}else{
  				reject(data);
  			}
  		})
  	})
  }
}
