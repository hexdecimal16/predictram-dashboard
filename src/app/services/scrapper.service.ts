import { Injectable } from '@angular/core';
import cheerio from 'cheerio';
import axios from 'axios';
import vader from 'vader-sentiment';
import { News } from '../model/news.model';
import { Table } from '../model/table.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { data } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class ScrapperService {

  moneycontrolNews: [];
  mcdb: News[];
  cndb: News[];
  fundamentalTables: Table[];
  technicalTables: Table[];
  trendsTable: Table[];
  corporateTable: Table[];
  niftyTable: Table[];
  AxiosInstance = axios.create();

  constructor() {
    this.mcdb = [];
    this.cndb = [];
  }

  async fetchnews(dbname) {
    if (dbname === "mc") {
      for (let indx of [1, 2, 3]) {
        let url = 'https://www.moneycontrol.com/news/business/stocks/page-' + (indx);
        this.AxiosInstance.post("https://uo8so5g7zj.execute-api.us-east-1.amazonaws.com/Test", {
          "key1": url
        }).then(response => {
          let html = response.data.body;
          const $ = cheerio.load(html);
          const li = $('#cagetory .clearfix');
          li.each(ele => {
            let link: string = li[ele].children[1].attribs.href;
            let title: string = li[ele].children[1].attribs.title;
            let score: number = vader.SentimentIntensityAnalyzer.polarity_scores(title).compound;
            let source: string = "mc"
            this.mcdb.push({ link, title, score, source });
          });
        });
      }
      return Promise.resolve(this.mcdb);
    } else {
      for (let indx of [1, 2, 3, 4, 5]) {
        let url = 'https://www.cnbctv18.com/market/stocks/page-' + (indx);
        this.AxiosInstance.post("https://uo8so5g7zj.execute-api.us-east-1.amazonaws.com/Test", {
          "key1": url
        }).then(response => {
          let html = response.data.body;
          const $ = cheerio.load(html);
          const li = $('.article-list li div .list_title a');
          li.each(ele => {
            let link: string = li[ele].attribs.href;
            let title: string = li[ele].children[0].data;
            let score: number = vader.SentimentIntensityAnalyzer.polarity_scores(title).compound;
            let source: string = "cn"
            this.cndb.push({ link, title, score, source });
          });
        });
      }
      return Promise.resolve(this.cndb);
    }
  }

  async screener(url: string) {
    this.fundamentalTables = [];
    this.AxiosInstance.post("https://uo8so5g7zj.execute-api.us-east-1.amazonaws.com/Test", {
      "key1": url
    }).then(response => {
      let html = response.data.body;
      const $ = cheerio.load(html);
      const tab = $('div .table-responsive');
      for (let i in [1, 2, 3, 4]) {
        let tableTitle = tab[i].children[0].children[0].children[0].data;
        let tableData = [];
        let temp = tab[i].children[0].children[1].children[1].children;
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].name != null) {
            const first = temp[i].children[1].children[0].data;
            const second = temp[i].children[3].children[0].data;
            tableData.push({ first, second });
          }
        }
        this.fundamentalTables.push({ tableTitle, tableData });
      }
    });
    return Promise.resolve(this.fundamentalTables);
  }

  async topstock(url: string) {
    this.technicalTables = [];
    this.AxiosInstance.post("https://uo8so5g7zj.execute-api.us-east-1.amazonaws.com/Test", {
      "key1": url
    }).then(response => {
      let html = response.data.body;
      const $ = cheerio.load(html);
      const tab = $('div').find('.col-lg-4.col-md-4.col-sm-4');
      for (let i of [1, 2, 3, 4, 5, 6]) {
        let tableTitle = tab[i].children[0].children[0].children[0].data;
        let tableData = [];
        let temp = tab[i].children[0].children[1].children[1].children;
        for (let i = 0; i < temp.length; i++) {
          if (temp[i].name != null) {
            let row = [];
            let node = temp[i].children;
            for (let j = 0; j < node.length; j++) {
              if (node[j].children[0].data !== " ") {
                row.push(node[j].children[0].data)
              } else {
                row.push(node[j].children[1].children[0].data)
              }
            }
            tableData.push(row);
          }
        }
        this.technicalTables.push({ tableTitle, tableData });
      }
    });
    return Promise.resolve(this.technicalTables);
  }

  async trends(url: string) {
    this.trendsTable = [];
    this.AxiosInstance.post("https://uo8so5g7zj.execute-api.us-east-1.amazonaws.com/Test", {
      "key1": url
    }).then(response => {
      let html = response.data.body;
      const $ = cheerio.load(html);
      const tab = $('div').find('#datagrid');
      tab.each(i => {
        let tableTitle = tab[i].children[0].children[0].data;
        let tableData = [];
        try {
          if (tab[i].children[1].name != undefined) {
            let temp = tab[i].children[1].children[1].children;
            for (let j = 0; j < temp.length; j++) {
              if (temp[j].name != null) {
                let row = [];
                let node = temp[j].children;
                for (let k = 0; k < node.length; k++) {
                  if (node[k].name !== undefined) {
                    if (node[k].children.length < -1) {
                      row.push(node[k].children[0].data);
                    } else {
                      let ele = node[k].children;
                      let str: string = "";
                      for (let m = 0; m < ele.length; m++) {
                        if (ele[m].data !== " " || ele[m].name != undefined) {
                          let data = ele[m].data;
                          if (data !== " " && data !== undefined) {
                            str = str.concat(data);
                          } else {
                            str = str.concat(ele[m].children[0].data);
                          }
                        }
                      }
                      row.push(str);
                    }
                  }
                }
                tableData.push(row);
              }
            }
          }
        } catch (error) {
          console.log(error);
        }
        this.trendsTable.push({ tableTitle, tableData });
      });
    });
    return Promise.resolve(this.trendsTable);
  }

  async export() {
    this.corporateTable = [];
    const url = 'https://www1.nseindia.com/corporates/datafiles/BM_All_Forthcoming.csv';
    this.AxiosInstance.post("https://uo8so5g7zj.execute-api.us-east-1.amazonaws.com/Test", {
      "key1": url
    }).then(response => {
      let arr: [];
      let row: any = [];

      let tableData = [];
      let element;
      let count = 0, title = 0;
      let tableTitle = []
      arr = response.data.body;
      for (let ele of arr) {
        if (ele === '"') {
          count++;
        }
        if (count % 2 !== 0 && ele !== '"' && ele !== '' && ele !== undefined && ele !== null) {
          element += ele;
        }
        if (element === undefined) {
          element = '';
        }
        if (count % 2 === 0) {
          if (element != undefined && element != null) {
            row.push(element);
          }
          element = '';
        }
        if (ele === "\n") {
          if (title == 0) {
            tableTitle.push(row);
            title++;
          } else {
            tableData.push(row);
          }
          row = [];
        }
      }
      this.corporateTable.push({ tableTitle, tableData });
      console.log(this.corporateTable);
      return this.corporateTable;
    });
    return Promise.resolve(this.corporateTable);
  }

  async nifty(symbol: any) {
    this.niftyTable = [];
    return Promise.resolve(this.niftyTable);
  }
}
