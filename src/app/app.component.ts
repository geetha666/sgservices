import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(@Inject(PLATFORM_ID) private platformId: any) {}
    onActivate(event: any) {
        if (isPlatformBrowser(this.platformId)) {
            const scrollToTop = window.setInterval(() => {
                const pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 50);
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 16);
        }
    }
  
  ngOnInit() {
    //this.router.navigateByUrl('home', { skipLocationChange: true });
  }
  title = 'SoftGenics';
}
