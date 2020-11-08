import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NewsApiService } from "./news-api.service";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatOptionModule, 
  MatCheckboxModule, 
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule, 
  MatGridListModule, 
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule, 
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { LiveNewsComponent } from "./live-news/live-news.component";
import { HomeComponent } from "./home/home.component";

import { APP_ROUTES } from "./app.routing";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { HealthComponent } from "./health/health.component";
import { TechnologyComponent } from "./technology/technology.component";
import { SportsComponent } from "./sports/sports.component";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { SearchNewsComponent } from './search-news/search-news.component';

@NgModule({
  declarations: [
    AppComponent,
    LiveNewsComponent,
    HomeComponent,
    EntertainmentComponent,
    HealthComponent,
    TechnologyComponent,
    SportsComponent,
    SearchNewsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatPaginatorModule,
  MatOptionModule, 
  MatCheckboxModule, 
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule, 
  MatGridListModule, 
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule, 
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
    RouterModule.forRoot(APP_ROUTES),
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
//
