import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsData:any

  constructor(private newsServic:NewsService) { }
  getNews(){
    this.newsServic.getNews().subscribe({
      next:(res:any)=>{
        console.log(res);
        
        this.newsData=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  addNews(news:any){
    this.newsServic.addNews(news).subscribe({
      next:(res:any)=>{
        console.log(res);
        
        this.newsData?.splice(0,0,res)
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  ngOnInit(): void {
    this.getNews()

  }

}
