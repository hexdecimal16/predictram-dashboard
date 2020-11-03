import { Component, OnInit } from '@angular/core';
import { Companies } from 'src/app/model/companies.model';
import { DetailsService } from 'src/app/services/details.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showDetails = 0
  k = ""
  constructor(public s: SearchService,
              public details: DetailsService) { 
                this.showDetails = 0
              }

  ngOnInit(): void {
  }

  seeDetails(company: Companies) {
    this.showDetails = 1
    this.details.setCompany(company)
  }

}
