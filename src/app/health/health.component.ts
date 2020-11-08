import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './../news-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { isNullOrUndefined } from "util";
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(private newsapi: NewsApiService, private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
      let pageTite = this.activatedRoute.snapshot.data['title'];
    this.titleService.setTitle(pageTite);
  }

  ngOnInit() {
    //load articles
    this.newsapi.initArticles("health").subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  menuNavigation(routeName: string) {
    this.router.navigate(["/" + routeName]);
  }
  searchArticles(source) {
    console.log("selected source is: " + source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
  openArticle(val) {
    console.log(val)
  }
  searchForNews(){
    var searchData = document.getElementById("searchNews");
    let searchString=searchData['value'];
    if(!isNullOrUndefined(searchString) && searchString.toString().length>=3){
      this.router.navigate(["/searchNews", searchString]);
    }
  }
}
