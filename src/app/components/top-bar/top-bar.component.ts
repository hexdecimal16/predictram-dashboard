import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  searchText: string = "";

  constructor(private tabs: TabsService,
    private s: SearchService) { }

  ngOnInit(): void {
  }

  changeTab(num: number) {
    this.searchText = "";
    this.search();
    document.getElementById('home').classList.remove('active');
    document.getElementById('news').classList.remove('active');
    document.getElementById('corporate').classList.remove('active');
    document.getElementById('nifty').classList.remove('active');
    document.getElementById('polls').classList.remove('active');
    if (num === 0) {
      document.getElementById('home').classList.add('active');
    } else if (num == 3) {
      document.getElementById('news').classList.add('active');
    } else if (num == 4){
      document.getElementById('corporate').classList.add('active');
    } else if (num == 5){
      document.getElementById('nifty').classList.add('active');
    } else {
      document.getElementById('polls').classList.add('active');
    }
    this.tabs.setTab(num);
  }

  search() {
    this.s.filter(this.tabs.tabIndex, this.searchText);
  }

}
