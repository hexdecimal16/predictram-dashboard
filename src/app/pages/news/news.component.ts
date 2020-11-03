import { Component, OnInit } from '@angular/core';
import { ScrapperService } from 'src/app/services/scrapper.service';
import { SearchService } from 'src/app/services/search.service';
import { TabsService } from 'src/app/services/tabs.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../../assets/anim/loading.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  
  constructor(public ss: SearchService,
              public tab: TabsService,
              private db: AngularFirestore) { }

  ngOnInit(): void {
    this.ss = new SearchService(new ScrapperService(),this.db, this.tab);
  }

  changeTab(num: number) {
    document.getElementById('mc').classList.remove('active');
    document.getElementById('cn').classList.remove('active');
    if (num) {
      document.getElementById('cn').classList.add('active');
    } else {
      document.getElementById('mc').classList.add('active');
    }
    this.tab.setNewsTab(num)
  }

  open(link) {
    window.open(link);
  }
}
