import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { PageService } from './pages-menu';


@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  menu:NbMenuItem[] = []
  constructor(private page: PageService) { 
    this.menu = this.page.MENU_ITEMS
  }

}
