import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapComponent } from './sitemap/sitemap.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TechComponent } from './tech/tech.component';

const routes: Routes = [
  {path:'sitemap.xml', component:SitemapComponent},
  {path:'contact',component:ContactusComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutusComponent},
  {path:'services',component:TechComponent},

  {path:'*', redirectTo:'home', pathMatch:'full'},
  {path: '',  component: HomeComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
