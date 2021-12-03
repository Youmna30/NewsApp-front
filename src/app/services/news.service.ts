import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interface/news';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }

  getNews(){    
    return this.http.get<News>(this.url+'news')
  }
  getSignleNews(id:String){    
    return this.http.get<News>(this.url+'news/'+ id)
  }
  addNews(body:News){
    console.log(body);
    
    return this.http.post(this.url+'news',body)
  }
}
