import { Injectable } from '@angular/core';
import { Companies } from '../model/companies.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class SearchService {
    query: BehaviorSubject<string>;
    constructor() {
        this.query = new BehaviorSubject<string>('');
      }    
    setQuery(query) {
        this.query.next(query);
    }
    getQuery() {
        return this.query.asObservable();
    }
}