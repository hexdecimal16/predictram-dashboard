import { Injectable } from '@angular/core';
import { Companies } from 'app/@core/model/companies.model';
import axios from 'axios';


@Injectable({
    providedIn: 'root'
})
export class TrendService {

    current: Companies;
    array: any[] = []
    one:any[] = []
    two:any[] = []
    three:any[] = []
    four:any[] = []
    five:any[] = []
    six:any[] = []
    seven:any[] = []
    eight:any[] = []
    nine:any[] = []
    t10:any[] = []
    t11:any[] = []
    t12:any[] = []
    t13:any[] = []
    t14:any[] = []
    t15:any[] = []
    t16:any[] = []
    t17:any[] = []
    t18:any[] = []
    t19:any[] = []
    t20:any[] = []
    row: [] = []
    AxiosInstance = axios.create();

    constructor() { }

    currentCompany(company: Companies) {
        this.current = company;
        this.screener(company.tech_link);
    }

    async screener(url: string) {
        console.log(url)
        this.AxiosInstance.post("https://w32f32o3rk.execute-api.us-east-1.amazonaws.com/v1", {
            "url": url
        }).then(response => {
            this.array = []
            this.array = JSON.parse(response.data.body)
            console.log(this.array)
            let temp = this.array[1][1];
            console.log(this.array)
            this.one = []
            Object.keys(temp).forEach((key) => {
                let row = []
                row.push(key)
                row.push(temp[key][0] )
                row.push(temp[key][1] )
                row.push(temp[key][2] )
                row.push(temp[key][3] )
                row.push(temp[key][4] )
                row.push(temp[key][5] )
                row.push(temp[key][6] )
                row.push(temp[key][7] )
                this.one.push(row)
            });

            this.two = this.array[2];
            this.three = this.array[3];
            this.four = this.array[4];
            this.five = this.array[5];
            this.six = this.array[6];
            this.seven = this.array[7];
            this.eight = this.array[8];
            this.nine = this.array[9];
            this.t10 = this.array[10];
            this.t11 = this.array[11];
            this.t12 = this.array[12];
            this.t13 = this.array[13];
            this.t14 = this.array[14];
            this.t15 = this.array[15];
            this.t16 = this.array[16];
            this.t17 = this.array[17];
            this.t18 = this.array[18];
            this.t19 = this.array[19];
            this.t20 = this.array[20];
            console.log(this.two)

        });
    }


}
