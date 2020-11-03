import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { element } from 'protractor';
import { Polls } from 'src/app/model/polls.model';
import { SearchService } from 'src/app/services/search.service';
import { TabsService } from 'src/app/services/tabs.service';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit {

  constructor(public tab: TabsService,
    private db: AngularFirestore,
    private s: SearchService) {
  }

  ngOnInit(): void {
  }

  async getPolls() {
    this.s.originalPolls = []
    const doc = await this.db.collection('polls').get();
    doc.forEach(element => {
      element.forEach(data => {
        var poll: Polls;
        poll.pollID = data.get('poll_id');
        poll.tags = data.get('tags');
        poll.pollQues = data.get('poll_ques');
        poll.pollType = data.get('poll_type');
        poll.userID = data.get('user_id');
        poll.pollAcceptStatus = data.get('poll_accept_status');
        poll.timestamp = data.get('timestamp');
        poll.pollResult = data.get('poll_result');
        poll.resultTimestamp = data.get('result_timestamp');
        poll.picID = data.get('pic_id');
        poll.pollOptions = data.get('poll_options');
        poll.linkUrl = data.get('link_url');
        poll.linkTitle = data.get('link_title');
        poll.linkDesc = data.get('link_desc');
        poll.totalVotes = data.get('total_votes');
        poll.option1 = data.get('option1');
        poll.option2 = data.get('option2');
        poll.option3 = data.get('option3');
        poll.option4 = data.get('option4');
        poll.lastData = data.get('last_data');
        poll.previousData = data.get('previous_data');
        poll.forecastData = data.get('forecast_data');
        poll.url = data.get('url');
        poll.startDate = data.get('start_date');
        poll.endDate = data.get('end_date');
        this.s.originalPolls.push(poll);

        console.log(poll);
      })
    });
  }

}
