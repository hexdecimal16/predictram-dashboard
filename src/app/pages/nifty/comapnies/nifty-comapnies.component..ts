import { Component } from '@angular/core';
import { NiftyDataService } from 'app/@core/mock/nifty-data.service';
import { SearchService } from 'app/@core/mock/search-service';
import { Nifty } from 'app/@core/model/nifty.model';
import { NiftyService } from '../nifty.service';

@Component({
  selector: 'ngx-nifty-companies',
  templateUrl: 'nifty-comapnies.component.html',
  styleUrls: ['nifty-comapnies.component.scss'],
})
export class NiftyCompaniesComponent {

  query = ''
  company: Nifty[]

  constructor(private nifty: NiftyDataService, private searchService: SearchService, public niftyService: NiftyService) {
    this.company =  this.nifty.getCompanies();
  }

  ngOnInit() {
    this.query = this.company[0].companyName
    this.searchService.getQuery().subscribe(value => {
      console.log(value)
      this.query = value
      this.filter(value)
    })
  }

  filter(value) {
    let temp = []
    this.company =  this.nifty.getCompanies();
    if(value != '') {
      for(let i = 0; i < this.company.length; i++) {
        if (this.company[i].companyName.toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
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
