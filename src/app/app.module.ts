import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';
import { NewsServiceService } from './news-service.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SourcesComponent } from './sources/sources.component';
import { HeadlinesComponent } from './headlines/headlines.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SourcesComponent,
    HeadlinesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
          path:'',component: HomeComponent
      },
      {
        path:'headlines', component: HeadlinesComponent
      },
      {
        path:'sources', component: SourcesComponent
      }

    ])
  ],
  providers: [
  NewsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
