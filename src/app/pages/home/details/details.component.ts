import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { AnimationItem } from 'ngx-lottie/src/symbols';
import { Companies } from 'src/app/model/companies.model';
import { Table } from 'src/app/model/table.model';
import { DetailsService } from 'src/app/services/details.service';
import { ScrapperService } from 'src/app/services/scrapper.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../../assets/anim/loading.json',
  };
  table1: Table[];
  table2: Table[];
  table3: Table[];
  currentCompany: Companies = null;
  type = 1
  value = "Show More"
  showMore = 0

  animationCreated(animationItem: AnimationItem): void {
  }
  constructor(public details: DetailsService, 
    private scrapper: ScrapperService) {
    let tableTitle = null;
    let tableData = null;
    this.table2 = [];
    this.table3 = [];
    this.table1 = [{tableTitle, tableData}];
   }

  ngOnInit(): void {
    this.currentCompany = this.details.getCompany()
    this.scrapper.screener(String(this.currentCompany.fin_link))
    .then(table => {
      this.table1 = table;
    });
  }

  changeTab(index: any) {
    this.type = index
    if(index === 1) {
      this.scrapper.screener(String(this.currentCompany.fin_link))
    .then(table => {
      this.table1 = table;
    });
    } else if(index === 2) {
      this.scrapper.topstock(String(this.currentCompany.link))
      .then(table => {
        this.table2 = table;
      });
    } else {
      this.scrapper.trends(String(this.currentCompany.tech_link))
    .then(table => {
      this.table3 = table;
    });
    }
  }

  showMoreContent() {
    if(this.showMore == 0) {
      this.showMore = 1
      this.value = "Hide"
    } else {
      this.showMore = 0
      this.value = "Show More"
    }
  }
}
