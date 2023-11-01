import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.scss']
})
export class SinglepageComponent {
  constructor(public meta:Meta){
    this.meta.updateTag({ name: 'description', content: "Discover the advantages of having a single page application (SPA) for your online business. Because SPAs load material dynamically, they provide a smooth user experience without requiring page refreshes." });
    this.meta.updateTag({ property: 'og:title', content: "Single Page Application" });
  }
}
