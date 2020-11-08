import { Component } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-moving',
  templateUrl: 'moving.component.html',
  styleUrls: ['moving.component.scss'],
})
export class MovingComponent {
  
  constructor(public technical: TechnicalService) { }
}
