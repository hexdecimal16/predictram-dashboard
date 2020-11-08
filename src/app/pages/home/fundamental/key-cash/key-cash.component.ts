import { Component } from '@angular/core';
import { FundamentalService } from '../fundamental.service';

@Component({
  selector: 'ngx-key-cash',
  templateUrl: 'key-cash.component.html',
  styleUrls: ['key-cash.component.scss'],
})
export class KeyCashComponent {
  constructor(public fundamental: FundamentalService) {
    
  }
}
