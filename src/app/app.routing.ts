import { Routes } from "@angular/router";
import { LiveNewsComponent } from "./live-news/live-news.component";
import { HomeComponent } from "./home/home.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { HealthComponent } from "./health/health.component";
import { TechnologyComponent } from "./technology/technology.component";
import { SportsComponent } from "./sports/sports.component";
import { SearchNewsComponent } from "./search-news/search-news.component";
export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
    data: { title: "Open News | World" }
  },
  {
    path: "sports",
    component: SportsComponent,
    pathMatch: "full",
    data: { title: "Open News | Sports" }
  },
  {
    path: "technology",
    component: TechnologyComponent,
    pathMatch: "full",
    data: { title: "Open News | Technology" }
  },
  {
    path: "health",
    component: HealthComponent,
    pathMatch: "full",
    data: { title: "Open News | Health" }
  },
  {
    path: "entertainment",
    component: EntertainmentComponent,
    pathMatch: "full",
    data: { title: "Open News | Entertainment" }
  },
  {
    path: "liveNews",
    component: LiveNewsComponent,
    pathMatch: "full",
    data: { title: "Open News | Watch Live News channel" }
  },
  {
    path: "searchNews/:searchString",
    component: SearchNewsComponent,
    pathMatch: "full",
    data: { title: "Open News | Searched News" }
  }

];
