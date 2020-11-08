import { Component } from '@angular/core';
import { PollService } from '../poll.service';

@Component({
  selector: 'ngx-financial',
  templateUrl: 'financial.component.html',
  styleUrls: ['financial.component.scss'],
})
export class FinancialComponent {

  constructor(public poll: PollService) { }

  ngOnInit() {

  }
}
