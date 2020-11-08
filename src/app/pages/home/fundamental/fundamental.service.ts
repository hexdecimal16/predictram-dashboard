import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { Companies } from 'app/@core/model/companies.model';
import { Table } from 'app/@core/model/table.model';
import axios from 'axios';
import * as cheerio from 'cheerio';


@Injectable({
  providedIn: 'root'
})
export class FundamentalService {

  financial: any[]= []
  ratios: any[] = []
  balance: any[] = []
  cash: any[] = []
  array: []= []
  AxiosInstance = axios.create();

  current

  constructor() { }


  currentCompany(company: Companies) {
    this.current = company.title
    this.screener(company.fin_link);
  }

  async screener(url: string) {
    console.log(url)
    this.AxiosInstance.post("https://r0uzvglua1.execute-api.us-east-1.amazonaws.com/v1", {
      "url": url
    }).then(response => {
      let data: JSON = JSON;
      this.array = data.parse(response.data.body);
      let i = 0;
      console.log(this.array)
      this.array.forEach(element => {
        if(i == 0) {
          this.financial = element[1]
          i++;
        }else if( i== 1) {
          this.ratios = element[1]
          console.log(this.ratios)
          i++;
        } else if ( i == 2) {
          this.balance = element[1]
          i++;
        } else {
          this.cash = element[1]
        }
      });
    });
  }

  
}
