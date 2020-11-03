import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { data } from 'jquery';
import { ScrapperService } from 'src/app/services/scrapper.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-nifty',
  templateUrl: './nifty.component.html',
  styleUrls: ['./nifty.component.css']
})
export class NiftyComponent implements OnInit {

  showTable = false
  data = ""
  tableHead: any = []
  table: any = []
  constructor(public s: SearchService, private scrapper: ScrapperService, private db: AngularFirestore) { }

  ngOnInit(): void {
  }

  async showStock(symbol: any) {
    const doc = await this.db.collection('nseindiaFinancial').doc(symbol).get();
    if(doc != null) {
      doc.forEach(value => {
        this.showTable = true
        this.generateTable(value.get('data'))
      })
    }
  }

  generateTable(value: any) {
    window.scrollTo(0, 0);
    var obj = []
    this.tableHead = []
    this.table = []
    obj= JSON.parse(value);
    var i = 0
    obj.forEach(element => {
      if(i === 0) {
        this.data = element[0].toString()
      }
      if(i=== 2) {
        this.tableHead.push(element)
      }
      if(i === 3) {
        var temp  = []
        temp.push(element)
        var c = 1
        var row = []
        temp[0].forEach(ele => {
          if(c%6 === 0 && ele != '') {
            row.push(ele)
            this.table.push(row)
            c = c + 1
            row = []
          } else if( ele != '') {
            row.push(ele )
            c = c + 1
          }
        })
      }
      i = i + 1
    });
  }

}
