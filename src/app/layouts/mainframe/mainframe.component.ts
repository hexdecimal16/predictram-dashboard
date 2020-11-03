import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-mainframe',
  templateUrl: './mainframe.component.html',
  styleUrls: ['./mainframe.component.css']
})
export class MainframeComponent implements OnInit {

  constructor(public tabs: TabsService) { }

  ngOnInit(): void {
  }

}
