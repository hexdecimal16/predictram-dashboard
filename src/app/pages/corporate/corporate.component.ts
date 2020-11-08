import {Component} from '@angular/core';
import { TabsService } from 'app/services/tabs.service';
import { CorporateService } from './corporate.service';


@Component({
  selector: 'ngx-corporate',
  styleUrls: ['./corporate.component.scss'],
  templateUrl: './corporate.component.html',
})
export class CorporateComponent {
  constructor( private tabs: TabsService, public corporate: CorporateService) { }

   ngOnInit() {
     this.tabs.setTab(4)
     this.corporate.getCorporate()
   }
}
