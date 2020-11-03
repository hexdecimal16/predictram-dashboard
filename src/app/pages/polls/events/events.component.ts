import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { ReplacePipe } from 'src/app/tools/replace-pipe';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(public s: SearchService) { }

  ngOnInit(): void {
  }

}
