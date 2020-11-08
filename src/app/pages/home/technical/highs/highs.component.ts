import { Component } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-highs',
  templateUrl: 'highs.component.html',
  styleUrls: ['highs.component.scss'],
})
export class HighsComponent {
  
  constructor(public technical: TechnicalService) { }
}
