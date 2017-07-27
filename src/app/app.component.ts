import { Component } from '@angular/core';
import { NewsServiceService } from './news-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  news:any[];
  sources:any[];
  constructor(private _newsService:NewsServiceService) {
   }

  ngOnInit() {
    this._newsService.getNews("the-next-web","latest")
    .subscribe(news => {

    	this.news = JSON.parse(news._body).articles;
    }); 

    this._newsService.getSources()
    .subscribe(sources => {

    	this.sources = JSON.parse(sources._body).sources;
    }); 

     error => {
        console.log(error);
    };
  }

}
