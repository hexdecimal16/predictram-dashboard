import { Component } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-gain',
  templateUrl: 'gain.component.html',
  styleUrls: ['gain.component.scss'],
})
export class GainComponent {
    constructor(public technical: TechnicalService) { }
  
}
