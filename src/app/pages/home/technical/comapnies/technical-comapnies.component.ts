import { Component } from '@angular/core';
import { CompanyDataService } from 'app/@core/mock/company-data.service';
import { SearchService } from 'app/@core/mock/search-service';
import { Companies } from 'app/@core/model/companies.model';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-technical-companies',
  templateUrl: 'technical-comapnies.component.html',
  styleUrls: ['technical-comapnies.component.scss'],
})
export class TechnicalCompaniesComponent {

  query = ''
  company: Companies[]

  constructor(private companies: CompanyDataService, private searchService: SearchService, public technical: TechnicalService) {
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
