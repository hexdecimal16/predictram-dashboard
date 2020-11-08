import { Injectable } from '@angular/core';
import { Table } from 'app/@core/model/table.model';
import axios from 'axios';


@Injectable({
    providedIn: 'root'
})
export class CorporateService {

    AxiosInstance = axios.create();
    corporateTable: Table [] = [];

    async getCorporate() {
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
        });
    }
}