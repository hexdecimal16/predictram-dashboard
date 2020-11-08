import {Component} from '@angular/core';
import { TabsService } from 'app/services/tabs.service';
import { NewsService } from './news.service';


@Component({
  selector: 'ngx-news',
  styleUrls: ['./news.component.scss'],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  constructor(public news: NewsService, private tabs: TabsService) {
    this.news.getNews('mc');
    this.news.getNews('cn');
   }

   ngOnInit() {
     this.tabs.setTab(3)
   }

   open(url) {
    window.open(url);
   }
}
