import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { LikePage } from '../like/like';
import { HomePage } from '../home/home';
import { PrdlistPage } from '../prdlist/prdlist';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PrdlistPage;
  tab3Root = LikePage;
  tab4Root = AboutPage;

  constructor() {

  }
}
