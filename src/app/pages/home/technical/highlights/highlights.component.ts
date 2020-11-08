import { Component } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-highlights',
  templateUrl: 'highlights.component.html',
  styleUrls: ['highlights.component.scss'],
})
export class HighlightsComponent {
  
  constructor(public technical: TechnicalService) { }
}
