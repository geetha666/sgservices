import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent {
constructor(public meta:Meta){
  this.meta.updateTag({ name: 'description', content: "Our services are designed to elevate your online presence, drive growth, and achieve your digital goals." });
  this.meta.updateTag({ property: 'og:title', content: "Services" });
}
}
