import { Component } from '@angular/core';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = 'PrdListPage';
  tab3Root = 'UserCollectPage';  
  tab4Root = 'UserListPage';  

  constructor() {
  	
  }
}
