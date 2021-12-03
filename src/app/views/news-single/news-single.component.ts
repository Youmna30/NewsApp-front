import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interface/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-single',
  templateUrl: './news-single.component.html',
  styleUrls: ['./news-single.component.css']
})
export class NewsSingleComponent implements OnInit {
  news:News={}
  constructor(private newsService:NewsService, private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']
  getSingleNews(){
    this.newsService.getSignleNews(this.id).subscribe({
      next:(res:any)=>{
        // console.log(res);
        
        this.news=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }
  back(){
    this.router.navigate(['/news'])
  }
  ngOnInit(): void {
    this.getSingleNews()
  }

}
