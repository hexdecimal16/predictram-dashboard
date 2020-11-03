import { Injectable } from '@angular/core';
import { Companies } from '../model/companies.model';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {
    private currentCompany: Companies
    showDetails = 0
    constructor() { }
    getCompany() {
        return this.currentCompany
    }
    setCompany(company: Companies) {
        this.currentCompany = company
        this.showDetails =  1
    }
}