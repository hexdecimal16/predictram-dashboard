import { Component } from '@angular/core';
import { CompanyDataService } from 'app/@core/mock/company-data.service';
import { TabsService } from 'app/services/tabs.service';
import { TrendService } from './trend.service';

@Component({
  selector: 'ngx-trend',
  templateUrl: 'trend.component.html',
  styleUrls: ['trend.component.scss'],
})
export class TrendComponent {

  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];
  constructor(private tabs: TabsService,
              public trend: TrendService,
              private companies: CompanyDataService) { }
  ngOnInit() {
    this.trend.currentCompany(this.companies.getCompanies()[0])
    this.tabs.setTab(2);
  }
}
