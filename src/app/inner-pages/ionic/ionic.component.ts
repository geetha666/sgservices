import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ionic',
  templateUrl: './ionic.component.html',
  styleUrls: ['./ionic.component.scss']
})
export class IonicComponent {
  constructor(public meta:Meta){
    this.meta.updateTag({ name: 'description', content: "Designed to function seamlessly on the newest mobile devices, Ionic is a flexible and strong framework for creating mobile applications." });
    this.meta.updateTag({ property: 'og:title', content: "Ionic" });
  }
}
