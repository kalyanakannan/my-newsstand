import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  news:any[];
  sources:object[];
  private userSources: string[] = [];
  constructor(private _newsService:NewsServiceService) {
   }

  ngOnInit() {
    this._newsService.getNews("the-next-web","latest")
    .subscribe(news => {
    	this.news.push(JSON.parse(news._body).articles);
    }); 

    this._newsService.getSources()
    .subscribe(sources => {

    	this.sources = JSON.parse(sources._body).sources;
    }); 

     error => {
        console.log(error);
    };
  }

  onSourceChange($event)
  {
  	$event.stopPropagation();
  	if($event.target.checked)
  	{
  		this.userSources.push($event.target.value);
  		this.news = [];
  		this.userSources = this.userSources.reverse();
  		for (let source of this.userSources) {
		    this._newsService.getNews(source,"latest")
		    .subscribe(news => {
          console.log(JSON.parse(news._body).articles);
		    	this.news.push(JSON.parse(news._body).articles);
          console.log(this.news);
		    });
		}
  	}
  	else
  	{
  		let removeIndex:number;
  		removeIndex = this.userSources.indexOf($event.target.value);
  		this.userSources.splice(removeIndex,1);
  		this.userSources = this.userSources.reverse();
  		this.news = [];
  		for (let source of this.userSources) {
		    this._newsService.getNews(source,"latest")
		    .subscribe(news => {
		    	this.news.push(JSON.parse(news._body).articles);
		    });
		}
  	}
  }

}

