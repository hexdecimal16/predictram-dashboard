import { Component } from '@angular/core';
import { CompanyDataService } from 'app/@core/mock/company-data.service';
import { Table } from 'app/@core/model/table.model';
import { TabsService } from 'app/services/tabs.service';
import axios from 'axios';
import { FundamentalService } from './fundamental.service';

@Component({
  selector: 'ngx-fundamental',
  templateUrl: 'fundamental.component.html',
  styleUrls: ['fundamental.component.scss'],
})
export class FundamentalComponent {

  AxiosInstance = axios.create();
  constructor (private tabs: TabsService,
               public fundamental: FundamentalService,
               private comapnies: CompanyDataService) { }

    
  ngOnInit(): void {
    this.tabs.setTab(0);
    this.fundamental.currentCompany(this.comapnies.getCompanies()[0]);
  }
}
