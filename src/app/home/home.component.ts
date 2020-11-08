import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "./../news-api.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;
  constructor(
    private newsapi: NewsApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {
    let pageTite = this.activatedRoute.snapshot.data["title"];
    this.titleService.setTitle(pageTite);
  }
  ngOnInit() {
    //load articles
    this.newsapi
      .initArticles("NA")
      .subscribe(data => (this.mArticles = data["articles"]));
    //load news sources
    this.newsapi
      .initSources()
      .subscribe(data => (this.mSources = data["sources"]));
  }

  menuNavigation(routeName: string) {
    this.router.navigate(["/" + routeName]);
  }
  searchArticles(source) {
    console.log("selected source is: " + source);
    this.newsapi
      .getArticlesByID(source)
      .subscribe(data => (this.mArticles = data["articles"]));
  }
  openArticle(val) {
    console.log(val);
  }
  searchForNews(){
    var searchData = document.getElementById("searchNews");
    let searchString=searchData['value'];
    if(!isNullOrUndefined(searchString) && searchString.toString().length>=3){
      this.router.navigate(["/searchNews", searchString]);
    }
  }
}
