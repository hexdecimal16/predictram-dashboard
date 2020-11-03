import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/model/table.model';
import { ScrapperService } from 'src/app/services/scrapper.service';
import { SearchService } from 'src/app/services/search.service';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  options: AnimationOptions = {
    path: '../../../assets/anim/loading.json',
  };
  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
  table: Table [];

  constructor(private scrapper: ScrapperService, 
              public ss: SearchService) { 
    this.table = [];
  }

  ngOnInit(): void {
    this.scrapper.export()
    .then(table => {
      this.table = table;
    });
  }

}
