import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
    providedIn: 'root'
})
export class NewsService {

    AxiosInstance = axios.create();
    mc: [] = []
    cn: [] = []
    async getNews(type) {
        this.AxiosInstance.post("https://njy8gpzg03.execute-api.us-east-1.amazonaws.com/v1" , {
            'type': type
        }) 
        .then(response => {
            console.log(JSON.parse(response.data.body))
            if(type == 'mc') {
                this.mc = JSON.parse(response.data.body)
            } else {
                this.cn = JSON.parse(response.data.body)
            }
        })
    }
}