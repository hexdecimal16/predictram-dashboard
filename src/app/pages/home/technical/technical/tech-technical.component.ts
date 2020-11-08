import { Component } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-tech-technical',
  templateUrl: 'tech-technical.component.html',
  styleUrls: ['tech-technical.component.scss'],
})
export class TechTechnicalComponent {
  
  constructor(public technical: TechnicalService) { }
}
