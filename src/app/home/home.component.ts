import { AfterViewInit, Component } from '@angular/core';
import { auto } from '@popperjs/core';
import * as $ from 'jquery';
import 'owl.carousel';
declare interface JQuery {
  owlCarousel(options?: any): JQuery;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements AfterViewInit {

psd :any ="Transform your creative designs into functional web pages with our PSD to HTML conversion service";
wordpress :any="Harness the power of WordPress for your web presence.We customize our WordPress development services"
angular : any="Leverage the power of Angular to build dynamic and interactive web applications"
single : any="Experience the benefits of a Single Page Application (SPA) for your web presence"
ionic : any ="Designed to function seamlessly on the newest mobile devices, Ionic is a flexible and strong framework"
ios:any="We create sleek, user-friendly apps for Apple devices, taking advantage of the iOS platform's features"


  ngAfterViewInit() {
    jQuery('.services-slide').owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      touchDrag: false,
      mouseDrag: true,
      nav: true,
      margin: 15,
     
      responsive: {
          0: {
              items: 1
          },
          767: {
              items: 2
          },
          1024: {
            items: 3
        },
        
      }
  });
  

  }

}