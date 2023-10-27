import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TechComponent } from './tech/tech.component';
import { PsdHtmlComponent } from './inner-pages/psd-html/psd-html.component';
import { AngularwebComponent } from './inner-pages/angularweb/angularweb.component';
import { WordpressComponent } from './inner-pages/wordpress/wordpress.component';
import { SinglepageComponent } from './inner-pages/singlepage/singlepage.component';
import { IonicComponent } from './inner-pages/ionic/ionic.component';
import { IosAdComponent } from './inner-pages/ios-ad/ios-ad.component';

const routes: Routes = [
  {path:'sitemap.xml', component:SitemapComponent},
  {path:'contact',component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'services',component:TechComponent},
  {path:'psd-html',component:PsdHtmlComponent},
  {path:'angular',component:AngularwebComponent},
  {path:'wordpress',component:WordpressComponent},
  {path:'singlepage',component:SinglepageComponent},
  {path:'ionic',component:IonicComponent},
  {path:'ios-adroid',component:IosAdComponent},
  {path:'*', redirectTo:'home', pathMatch:'full'},
  {path: '',  component: HomeComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
