import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ios-ad',
  templateUrl: './ios-ad.component.html',
  styleUrls: ['./ios-ad.component.scss']
})
export class IosAdComponent {
  constructor(public meta:Meta){
    this.meta.updateTag({ name: 'description', content: "We design slick, intuitive applications for Apple products, leveraging the capabilities of the iOS platform and the large iOS user community." });
    this.meta.updateTag({ property: 'og:title', content: "Android and IOS" });
  }
}
