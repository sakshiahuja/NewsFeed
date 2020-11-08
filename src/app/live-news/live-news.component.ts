import { Component, OnInit } from "@angular/core";
import { NewsApiService } from "./../news-api.service";
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser";
import { isNullOrUndefined } from "util";
@Component({
  selector: "app-live-news",
  templateUrl: "./live-news.component.html",
  styleUrls: ["./live-news.component.css"]
})
export class LiveNewsComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;

  id = "dksJDK9RvSs"; //aajtak
  id2 = "6CETivqm2VE"; //ABP News
  id3 = "whFfJqxUuwA"; //indiatv
  playerVars = {
    cc_lang_pref: "en"
  };
  private player;
  private ytEvent;

  constructor(
    private newsapi: NewsApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
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
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
  searchForNews(){
    var searchData = document.getElementById("searchNews");
    let searchString=searchData['value'];
    if(!isNullOrUndefined(searchString) && searchString.toString().length>=3){
      this.router.navigate(["/searchNews", searchString]);
    }
  }
}
