import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitemapComponent } from './sitemap/sitemap.component';

const routes: Routes = [
  {path:"sitemap.xml", component:SitemapComponent},
  {path:"", redirectTo:'header', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
