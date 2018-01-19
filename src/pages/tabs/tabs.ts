import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { PrdListPage } from '../prd-list/prd-list';
import { UserCollectPage } from '../user-collect/user-collect';
import { UserListPage } from '../user-list/user-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PrdListPage;
  tab3Root = UserCollectPage;  
  tab4Root = UserListPage;  

  constructor() {
  	
  }
}
