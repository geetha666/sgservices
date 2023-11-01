import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-wordpress',
  templateUrl: './wordpress.component.html',
  styleUrls: ['./wordpress.component.scss']
})
export class WordpressComponent {
  constructor(public meta:Meta){
    this.meta.updateTag({ name: 'description', content: "Use WordPress's capability to enhance your online presence. We customize our WordPress development services to fit your particular requirements." });
    this.meta.updateTag({ property: 'og:title', content: "WordPress Development" });
  }
}
