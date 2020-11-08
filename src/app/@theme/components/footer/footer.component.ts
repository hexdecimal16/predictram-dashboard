import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://www.predictram.com/" target="_blank">Predictram Team</a></b> 2020
    </span>
  `,
})
export class FooterComponent {
}
