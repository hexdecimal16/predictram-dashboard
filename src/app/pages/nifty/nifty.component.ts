import {Component} from '@angular/core';
import { NiftyDataService } from 'app/@core/mock/nifty-data.service';
import { TabsService } from 'app/services/tabs.service';
import { NiftyService } from './nifty.service';


@Component({
  selector: 'ngx-nifty',
  styleUrls: ['./nifty.component.scss'],
  templateUrl: './nifty.component.html',
})
export class NiftyComponent {
  constructor( private tabs: TabsService, public niftyService: NiftyService, private niftyData: NiftyDataService) { }

   ngOnInit() {
     this.tabs.setTab(5)
     this.niftyService.getNifty(this.niftyData.getCompanies()[0])
   }

}
