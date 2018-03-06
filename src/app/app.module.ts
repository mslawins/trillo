import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BookNowComponent } from './book-now/book-now.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { OfferHeaderComponent } from './offer-header/offer-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavComponent,
    BookNowComponent,
    ReviewsComponent,
    OfferDetailsComponent,
    OfferHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
