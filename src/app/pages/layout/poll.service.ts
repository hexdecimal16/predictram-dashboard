import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Companies } from 'app/@core/model/companies.model';
import { Polls } from 'app/@core/model/polls.model';
import { Table } from 'app/@core/model/table.model';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PollService {


  polls: Polls[];
  originalPolls: Polls[];

  constructor(private db: AngularFirestore,) { }

  async getPolls() {
    this.originalPolls = []
    this.polls = []
    const doc = await this.db.collection('polls').get();
    doc.forEach(element => {
      element.forEach(data => {
        var poll: Polls = {
          pollID: '',
          tags: '',
          pollQues: '',
          pollType: '',
          userID: '',
          pollAcceptStatus: '',
          timestamp: '',
          pollResult: '',
          resultTimestamp: "",
          picID: '',
          pollOptions: '',
          linkUrl: '',
          linkTitle: '',
          linkDesc: '',
          totalVotes: '',
          option1: '',
          option2: '',
          option3: '',
          option4: '',
          lastData: '',
          previousData: '',
          forecastData: '',
          url: '',
          startDate: '',
          endDate: '',
          date: ''
        }
        poll['pollID'] = data.get('poll_id');
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
        poll.option1 = ((data.get('option_1')/poll.totalVotes) * 100).toFixed(2) + '%';
        poll.option2 = ((data.get('option_2')/poll.totalVotes) * 100).toFixed(2) + '%';
        poll.option3 = ((data.get('option_3')/poll.totalVotes) * 100).toFixed(2) + '%';
        poll.option4 = ((data.get('option_4')/poll.totalVotes) * 100).toFixed(2) + '%';
        poll.lastData = data.get('last_data');
        poll.previousData = data.get('previous_data');
        poll.forecastData = data.get('forecast_data');
        poll.url = data.get('url');
        try {
          poll.startDate = this.toDateTime(data.get('start_date')['seconds']);
        } catch {
          poll.startDate = data.get('start_date');
        }
        try {
          poll.endDate = this.toDateTime(data.get('end_date')['seconds']);
        } catch {
          poll.endDate = data.get('end_date');
        }
        poll.date = data.get('end_date');
        this.originalPolls.push(poll);
        this.polls.push(poll);
      })
      this.originalPolls.sort((a,b) => {return (a.date - b.date)});
      this.originalPolls.sort((a,b) => {return (a.date - b.date)});
      this.originalPolls.reverse();
      this.polls.reverse();
    });
  }
  
  toDateTime(secs) {
    var d = new Date(1970, 0, 1); // Epoch
    d.setSeconds(secs);
    var date = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    var min  = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + '/' + month + '/' + year + ' ' +  hours + ':' + min + ampm;
    return strTime;
  }
}
