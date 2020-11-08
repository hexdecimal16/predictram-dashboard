import { Component } from '@angular/core';
import { TechnicalService } from '../technical.service';

@Component({
  selector: 'ngx-volume',
  templateUrl: 'volume.component.html',
  styleUrls: ['volume.component.scss'],
})
export class VolumeComponent {
  
  constructor(public technical: TechnicalService) { }
}
