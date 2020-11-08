import { Component, OnInit } from '@angular/core';
import { CompanyDataService } from 'app/@core/mock/company-data.service';
import { TabsService } from 'app/services/tabs.service';
import { TechnicalService } from './technical.service';

@Component({
  selector: 'ngx-technical',
  templateUrl: 'technical.component.html',
  styleUrls: ['technical.component.scss'],
})
export class TechnicalComponent implements OnInit {


  constructor(private tabs: TabsService,
              public technical: TechnicalService,
              private companies: CompanyDataService) {
  }

  ngOnInit() {
    this.technical.currentCompany(this.companies.getCompanies()[0])
    this.tabs.setTab(1);
  }
}
