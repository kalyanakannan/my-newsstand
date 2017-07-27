import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class NewsServiceService {
	private newsApiURL;
	private token;
	events:any[];
	private headers = new Headers();
	options:RequestOptions;
	constructor(private http:Http) {
		this.newsApiURL = environment.apiURL;
		this.token = environment.apiToken;
	}
	getNews(source,sortby)
	{
		// "&sortBy="+sortby+
		return this.http.get(this.newsApiURL + "articles?source=" +source+"&apiKey="+this.token)
		.catch(this.handleError);
	}

	getNewsFromMultipleSources(soruces,sortby)
	{

	}

	getSources()
	{
		
		return this.http.get(this.newsApiURL + "sources?language=en")
		.catch(this.handleError);
	}

	private handleError(error:Response)
	{
		if(error.status == 400)
			return Observable.throw("error");
		if(error.status === 404)
			return Observable.throw("error");
		else
			return Observable.throw("error");
			
			
	}
}
