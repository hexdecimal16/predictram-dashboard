import { Component } from '@angular/core';
import { CompanyDataService } from 'app/@core/mock/company-data.service';
import { SearchService } from 'app/@core/mock/search-service';
import { Companies } from 'app/@core/model/companies.model';
import { TrendService } from '../trend.service';

@Component({
  selector: 'ngx-trend-companies',
  templateUrl: 'trend-comapnies.component.html',
  styleUrls: ['trend-comapnies.component.scss'],
})
export class TrendCompaniesComponent {

  query = ''
  company: Companies[]

  constructor(private companies: CompanyDataService, private searchService: SearchService, public trend: TrendService) {
    this.company =  this.companies.getCompanies();
  }

  ngOnInit() {
    this.searchService.getQuery().subscribe(value => {
      console.log(value)
      this.query = value
      this.filter(value)
    })
  }

  filter(value) {
    let temp = []
    this.company =  this.companies.getCompanies();
    if(value != '') {
      for(let i = 0; i < this.company.length; i++) {
        if (this.company[i].title.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
          temp.push(this.company[i]);
        }
      }
      this.company = temp
    }
    
  }

  clear() {
    this.query = ''
    this.filter('')
  }
}
