import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SitemapComponent } from './sitemap/sitemap.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechComponent } from './tech/tech.component';
import { WordpressComponent } from './wordpress/wordpress.component';
import { AngularwebComponent } from './angularweb/angularweb.component';
import { SinglepageComponent } from './singlepage/singlepage.component';
import { IonicComponent } from './ionic/ionic.component';
import { IosAdComponent } from './ios-ad/ios-ad.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SitemapComponent,
    FooterComponent,
    AboutusComponent,
    ContactusComponent,
    TechComponent,
    WordpressComponent,
    AngularwebComponent,
    SinglepageComponent,
    IonicComponent,
    IosAdComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule    
  ],
  providers: [   // { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
