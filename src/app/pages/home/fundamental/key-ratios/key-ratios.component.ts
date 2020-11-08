import { Component } from '@angular/core';
import { FundamentalService } from '../fundamental.service';

@Component({
  selector: 'ngx-key-ratios',
  templateUrl: 'key-ratios.component.html',
  styleUrls: ['key-ratios.component.scss'],
})
export class KeyRatiosComponent {
  constructor(public fundamental: FundamentalService) {
    
  }
}
