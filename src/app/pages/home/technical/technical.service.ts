import { Injectable } from '@angular/core';
import { Companies } from 'app/@core/model/companies.model';
import axios from 'axios';


@Injectable({
    providedIn: 'root'
})
export class TechnicalService {

    current
    array: any[] = []
    volume: any[] = []
    gain: any[] = []
    highs: any[] = []
    moving: any[] = []
    technical: [] = []
    AxiosInstance = axios.create();

    constructor() { }

    currentCompany(company: Companies) {
        this.current = company.title
        this.screener(company.link);
    }

    async screener(url: string) {
        console.log(url)
        this.AxiosInstance.post("https://m7yod7xec9.execute-api.us-east-1.amazonaws.com/v1", {
            "url": url
        }).then(response => {
            let data: JSON = JSON;
            this.array = []
            this.array =data.parse(response.data.body);
            console.log(this.array)
            this.volume = this.array["Price / Volume Action"]
            this.gain = this.array["Price Gain/Loss "]
            this.highs = this.array["Highs / Lows "]
            this.moving = this.array["Key Moving Average "]
            this.technical = this.array["Key Technical Indicators "]
            let i = 0;
            console.log(this.technical)
        });
    }


}
