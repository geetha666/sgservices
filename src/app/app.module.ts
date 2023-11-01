import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { FooterComponent } from './footer/footer.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechComponent } from './tech/tech.component';
import { WordpressComponent } from './inner-pages/wordpress/wordpress.component';
import { AngularwebComponent } from './inner-pages/angularweb/angularweb.component';
import { IonicComponent } from './inner-pages/ionic/ionic.component';
import { IosAdComponent } from './inner-pages/ios-ad/ios-ad.component';
import { PsdHtmlComponent } from './inner-pages/psd-html/psd-html.component';
import { SinglepageComponent } from './inner-pages/singlepage/singlepage.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WordcountPipe } from './pipes/wordcount.pipe';


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
    PsdHtmlComponent,
    WordcountPipe,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgbModule
    
  ],
  providers: [   // { provide: LocationStrategy, useClass: HashLocationStrategy }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
