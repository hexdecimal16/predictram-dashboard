import { Component } from '@angular/core';
import { PollService } from './poll.service';

@Component({
  selector: 'ngx-components',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class LayoutComponent {
  constructor(private poll: PollService) { }

  ngOnInit() {
    this.poll.getPolls()
  }
}
