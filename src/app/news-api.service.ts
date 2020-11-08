import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  api_key = "1fb479b27b854ed6a364b66f2017c356";

  constructor(private http: HttpClient) {}

  initSources() {
    return this.http.get(
      "https://newsapi.org/v2/sources?country=in&language=en&apiKey=" +
        this.api_key
    );
  }
  initArticles(category: string) {
    if (category=="NA") {
      return this.http.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=" + this.api_key);
    } else {
      return this.http.get(
        "https://newsapi.org/v2/top-headlines?category="+category+"&apiKey=" + this.api_key
      );
    }
  }

  getArticlesByID(source: String) {
    return this.http.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=" +
        this.api_key
    );
  }
    searchNewsByString(searchString: string){
      let date=new Date();
      let finaldate=date.setDate(date.getDate()-3);
      return this.http.get( "https://newsapi.org/v2/everything?q="+searchString+"&from="+finaldate+"sortBy=popularity&apiKey="+this.api_key);
    }
}
