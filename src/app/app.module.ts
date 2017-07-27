import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ErrorHandler } from '@angular/core';
import { NewsServiceService } from './news-service.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
  NewsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
