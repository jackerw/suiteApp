import { Component } from '@angular/core';

/**
 * Generated class for the UsernameComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'username',
  templateUrl: 'username.html',
  inputs:['title']  
})
export class UsernameComponent {

  title: string;

  constructor() {
    console.log('Hello UsernameComponent Component');
  }

}
