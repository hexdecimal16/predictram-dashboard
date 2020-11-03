import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-ec-events',
  templateUrl: './ec-events.component.html',
  styleUrls: ['./ec-events.component.css']
})
export class EcEventsComponent implements OnInit {

  constructor(public s: SearchService) { }

  ngOnInit(): void {
  }

}
