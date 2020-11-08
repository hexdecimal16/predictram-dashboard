import { Component } from '@angular/core';
import { FundamentalService } from '../fundamental.service';

@Component({
  selector: 'ngx-financial-highlights',
  templateUrl: 'financial-highlights.component.html',
  styleUrls: ['financial-highlights.component.scss'],
})
export class FinancialHighlightsComponent {

  constructor(public fundamental: FundamentalService) {
    
  }
}
