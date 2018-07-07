import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { configUrl } from '../config/config';

/*
  Generated class for the PrdlistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PrdlistProvider {

  constructor(public http: HttpClient) {
    console.log('Hello PrdlistProvider Provider');
  }
  getList(){
  	return new Promise((resolve,reject)=>{
  		this.http.get(configUrl.listUrl)
          .subscribe(data =>  {
            let list:any=data;
            if(list.statusCode==200){
               resolve(list)
            }
        });
	   })
  }
}
