import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  tabIndex: number = 0;
  newsTabIndex:number = 0

  setTab(num: number) {
    this.tabIndex = num;
  }


  setNewsTab(num: number) {
    this.newsTabIndex = num;
  }

  constructor() { }
}
