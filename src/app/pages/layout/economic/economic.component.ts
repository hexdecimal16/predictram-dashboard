import { Component } from '@angular/core';
import { PollService } from '../poll.service';

@Component({
  selector: 'ngx-econommic',
  templateUrl: 'economic.component.html',
  styleUrls: ['economic.component.scss'],
})
export class EconomicComponent  {

  constructor(public poll: PollService) {
  }

  ngOnInit() {
  }
}
