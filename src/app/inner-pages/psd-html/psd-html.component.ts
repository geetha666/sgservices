import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-psd-html',
  templateUrl: './psd-html.component.html',
  styleUrls: ['./psd-html.component.scss']
})
export class PsdHtmlComponent {
  constructor(public meta:Meta){
    this.meta.updateTag({ name: 'description', content: "Use our PSD to HTML translation service to turn your creative designs into useful web pages. We convert your Photoshop designs into responsive, pixel-perfect HTML and CSS." });
    this.meta.updateTag({ property: 'og:title', content: "PSD to HTML Conversion" });
  }
}
