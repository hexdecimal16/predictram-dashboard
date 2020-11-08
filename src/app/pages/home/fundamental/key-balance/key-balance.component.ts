import { Component } from '@angular/core';
import { FundamentalService } from '../fundamental.service';

@Component({
  selector: 'ngx-key-balance',
  templateUrl: 'key-balance.component.html',
  styleUrls: ['key-balance.component.scss'],
})
export class KeyBalanceComponent {
  constructor(public fundamental: FundamentalService) {
    
  }
}
