import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-angularweb',
  templateUrl: './angularweb.component.html',
  styleUrls: ['./angularweb.component.scss']
})
export class AngularwebComponent {
  constructor(public meta:Meta){
    this.meta.updateTag({ name: 'description', content: "Leverage the power of Angular to build dynamic and interactive web applications." });
    this.meta.updateTag({ property: 'og:title', content: "Angular Web Development" });
  }
}
